import React from 'react'
import logo from '/logo.png'
const Navbar = () => {
  return (
    <nav className={`mx-5 mt-3 flex justify-between items-center`}>
      <div className="logo">
        <img src={logo} alt="logo" className={`h-14`}/>
      </div>
      <div className="navlinks">
        <ul className='flex gap-x-12 navFont'>
          <a href="/"><li>Home</li></a>
          <a href="/"><li>Start Filter</li></a>
          <a href="/"><li>Pricing</li></a>
          <a href="/"><li>Contact us</li></a>
        </ul>
      </div>
      <div className="login">
        <button className={`ring-1 ring-black px-6 py-1 rounded-full hover:text-white hover:bg-black btnHover`}>Login</button>
      </div>
    </nav>
  )
}

export default Navbar
