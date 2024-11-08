import React from 'react'
import axios from 'axios'
import women from '/women.png'
import Card from '../Games/Card'
import { useEffect, useState } from 'react'
function Home() {
const [sent, setsent] = useState(false)


const handleclick=()=>{
  axios.post("http://localhost:8000/sent")
  .then((res) => {
    console.log(res.data);
  })
  .catch((e) => {
    console.log(e);
  });

}

  return (
    <>



<div className='h-screen w-screen bg-colors flex items-end justify-end  bg-cover'>
  <div className='w-full h-4/5 rounded-3xl flex-col justify-center rounded-br-none p-20 bg-gradient-to-b from-cream to-creame  bg-creame'>
  <h1 className='text-red-600 font-custom text-7xl'>Immediate Assistance</h1>
  <div className='grid grid-cols-3 grid-rows-1 gap-2 pt-20'>
    <Card imageSrc="https://tse2.mm.bing.net/th?id=OIG1.d4kAWYwZ1ckltgrDzWri&pid=ImgGn" title="Alert" subtitle="Send message" onClick={handleclick} />
    <Card imageSrc="/18958.jpg" title="Hello" subtitle="Morning"/>
    <Card imageSrc="/18958.jpg" title="Hello" subtitle="Morning"/>

  </div>
  
  </div>
  <img src={women} alt="" className='h-screen ' />
</div>
    </>
  )
}

export default Home