import React from 'react'
import Card from './Card'
function Games() {
  return (
    <>
    <div className='h-screen w-screen bg-cover flex-col bg-colors'>
      <div className='h-48 w-screen  flex justify-center items-center'><h1 className='font-custom mt-16 text-white  text-9xl '>Services</h1>
      </div><div className=' w-4/5 mt-12 grid grid-rows-1 mx-auto grid-cols-6 gap-x-5'>
      <Card imageSrc="/18958.jpg" title="Hello" subtitle="Morning"/>
      <Card imageSrc="/18958.jpg" title="Hello" subtitle="Morning"/>
      <Card imageSrc="/18958.jpg" title="Hello" subtitle="Morning"/>
      <Card imageSrc="/18958.jpg" title="Hello" subtitle="Morning"/>
      <Card imageSrc="/18958.jpg" title="Hello" subtitle="Morning"/>
      <Card imageSrc="/18958.jpg" title="Hello" subtitle="Morning"/>
      </div>
    </div>
    </>  )
}

export default Games