from flask import Flask, jsonify, render_template, request
import cv2
import sounddevice as sd
from scipy.io.wavfile import write
import numpy as np
import speech_recognition as sr
from datetime import datetime
import smtplib
from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText

app = Flask(__name__)
recognizer = sr.Recognizer()
recipient_email = "recipient@example.com"


def send_location_email(location_link):
    sender_email = "YOUR_EMAIL@gmail.com"
    sender_password = "YOUR_PASSWORD"

    # Set up the email
    msg = MIMEMultipart()
    msg['From'] = sender_email
    msg['To'] = recipient_email
    msg['Subject'] = "User's Shared Location"
    body = f"The user's location: {location_link}"
    msg.attach(MIMEText(body, 'plain'))

    # Send the email
    try:
        server = smtplib.SMTP('smtp.gmail.com', 587)
        server.starttls()
        server.login(sender_email, sender_password)
        text = msg.as_string()
        server.sendmail(sender_email, recipient_email, text)
        server.quit()
        print("Email sent successfully.")
    except Exception as e:
        print(f"Failed to send email: {e}")


def record_audio(filename, duration=5, fs=44100):
    print("Recording audio...")
    audio_data = sd.rec(int(duration * fs), samplerate=fs, channels=2)
    sd.wait()
    audio_data = np.int16(audio_data * 32767)
    write(filename, fs, audio_data)
    print("Audio recording complete:", filename)


def record_video(filename, duration=5, fps=20):
    print("Recording video...")
    cap = cv2.VideoCapture(0)
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter(filename, fourcc, fps, (width, height))

    for _ in range(int(fps * duration)):
        ret, frame = cap.read()
        if not ret:
            break
        out.write(frame)

    cap.release()
    out.release()
    print("Video recording complete:", filename)


def speech_to_text():
    with sr.Microphone() as source:
        print("Listening for trigger word...")
        recognizer.adjust_for_ambient_noise(source, duration=1)
        audio = recognizer.listen(source)

    try:
        text = recognizer.recognize_google(audio)
        print("You said:", text)
        return text.lower()
    except sr.UnknownValueError:
        print("Sorry, could not understand the audio.")
        return ""
    except sr.RequestError as e:
        print(f"Could not request results; {e}")
        return ""


@app.route("/")
def index():
    return render_template("index.html")


@app.route("/start_listening", methods=["POST"])
def start_listening():
    text = speech_to_text()

    if "help" in text:
        # When "help" is detected, start the audio/video recording
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        audio_filename = f"audio_{timestamp}.wav"
        video_filename = f"video_{timestamp}.avi"
        record_audio(audio_filename, duration=5)
        record_video(video_filename, duration=5)

        # Return the recorded files for the client to download
        return jsonify({"audio": audio_filename, "video": video_filename})


@app.route("/share_location", methods=["POST"])
def share_location():
    data = request.json
    latitude = data.get("latitude")
    longitude = data.get("longitude")

    if latitude and longitude:
        # Generate Google Maps link
        location_link = f"https://www.google.com/maps/search/?api=1&query={latitude},{longitude}"
        print(f"Location link: {location_link}")

        # Send the location link via email
        send_location_email(location_link)

        return jsonify({
            "status": "Location shared successfully!",
            "location_link": location_link
        })
    else:
        return jsonify({
            "status": "Error: No location data received."
        })


if __name__ == "__main__":
    app.run(debug=True)
