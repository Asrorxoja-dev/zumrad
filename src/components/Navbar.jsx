import React from 'react'
import logo from '../assets/logo.png'
function Navbar() {
  return (
    <div  className='fixed top-0 left-0 right-0 z-50 px-2 lg:px-4 bg-white shadow'>
      <div id='nav' className="navbar bg-base-100">
  <div className="flex-1">
    <a href='/' className=" btn-ghost text-xl">
        <img src={logo} alt="Zumrad Logo" width="200" height="100" />
    </a>
  </div>
  <div className="flex-none">
    <button className="btn  bg-blue-800 font-sans text-white hover:bg-blue-800">
     Register
    </button>
  </div>
</div>
    </div>
  )
}

export default Navbar