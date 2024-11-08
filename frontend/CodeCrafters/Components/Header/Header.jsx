import React from 'react'
import {Link, NavLink} from 'react-router-dom'

function Header() {

  return (
    <>
    <header className='bg-matte-green fixed z-10 h-20 w-full flex items-center '>
      <img src="https://tse3.mm.bing.net/th?id=OIG3.36IQ8o9iRRiFTOS4S0Ww&pid=ImgGn" className='h-16 rounded-lg ml-5' alt="" />
      <h1 className='text-3xl  text-yellow-500  text-border ml-1 font-bold'>Code</h1>
      <h1 className='text-3xl text-cyan-600 text-border ml-1 font-bold'>Crafters</h1>
      <nav className='ml-auto flex gap-12 mr-9 text-lg text-teal-950 font-semibold  '>
       <NavLink to={""} className='text-white' >Home</NavLink>
       <NavLink to={"games"} className='text-white' >Services</NavLink>
       <NavLink to={"medical"} className='text-white' >Medical</NavLink>

        </nav>

    </header>
    </>
  )
}

export default Header