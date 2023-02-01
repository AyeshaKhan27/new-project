import React from 'react'
import profile from "../../Assets/Icons/profile.png"
import "./header.css"
const Header = () => {
  return (
    <div className='top'>
        <div className="head">
        <a href="">Details</a>
        <a href="">Holdings</a>
        <a href="">Pending Deal's</a>
        <a href=""><img src={profile} alt="" /></a></div>
    </div>
  )
}

export default Header