import cv2
import sounddevice as sd
from scipy.io.wavfile import write
import numpy as np
import speech_recognition as sr
from datetime import datetime

# Initialize the recognizer
recognizer = sr.Recognizer()

def record_audio(filename, duration=5, fs=44100):
    """
    Records audio from the microphone and saves it as a .wav file.

    Args:
        filename (str): Name of the file to save the audio.
        duration (int): Duration of the audio recording in seconds.
        fs (int): Sampling frequency, typically 44100 Hz for high-quality audio.
    """
    print("Recording audio...")
    audio_data = sd.rec(int(duration * fs), samplerate=fs, channels=2)
    sd.wait()  # Wait until recording is finished
    audio_data = np.int16(audio_data * 32767)  # Convert float32 data to int16
    write(filename, fs, audio_data)  # Save as WAV file
    print("Audio recording complete:", filename)

def record_video(filename, duration=5, fps=20):
    """
    Records video from the default camera and saves it as a .avi file.

    Args:
        filename (str): Name of the file to save the video.
        duration (int): Duration of the video recording in seconds.
        fps (int): Frames per second.
    """
    print("Recording video...")
    cap = cv2.VideoCapture(0)  # Open the default camera
    width = int(cap.get(cv2.CAP_PROP_FRAME_WIDTH))
    height = int(cap.get(cv2.CAP_PROP_FRAME_HEIGHT))
    fourcc = cv2.VideoWriter_fourcc(*'XVID')
    out = cv2.VideoWriter(filename, fourcc, fps, (width, height))

    # Record frames for the duration of the video
    for _ in range(int(fps * duration)):
        ret, frame = cap.read()
        if not ret:
            break
        out.write(frame)

    cap.release()
    out.release()
    print("Video recording complete:", filename)

def speech_to_text():
    """
    Captures audio input and converts it to text using Google Speech Recognition.

    Returns:
        str: Transcribed text from speech input.
    """
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

def main():
    print("Press '1' for manual recording or wait for 'help' command.")
    user_input = input("Enter 1 to start recording or press Enter to wait: ")

    if user_input == "1":
        # One-tap recording
        timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
        record_audio(f"audio_{timestamp}.wav", duration=5)
        record_video(f"video_{timestamp}.avi", duration=5)
    else:
        # Automatic recording on keyword detection
        while True:
            text = speech_to_text()
            if "help" in text:
                print("Trigger word detected! Starting audio and video recording...")
                timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
                record_audio(f"audio_{timestamp}.wav", duration=5)
                record_video(f"video_{timestamp}.avi", duration=5)
                break

if __name__ == "__main__":
    main()