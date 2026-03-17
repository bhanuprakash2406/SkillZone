import React, { useState, useEffect } from 'react'
import { SiHyperskill } from "react-icons/si";
import { PiListBold } from "react-icons/pi";
import '../style/nav.css'
import '../style/form.css'
import Form from './Form';

const Nav = ({active }) => {
const [nav, setNav]=useState(false);

const [open, setOpen] = useState(false);

  return (
    <div className='nav'>
        <div className="main">
            <div className='title'>
                <SiHyperskill className="SiHyperskill"/>
                <p>Skill Zone</p>
            </div>
            <div className='list'>
                <ul>
                <li><a className={active === "home" ? "active" : ""} href="#home">Home</a></li>
                <li><a className={active === "courses" ? "active" : ""} href="#courses">Courses</a></li>
                <li><a className={active === "mentor" ? "active" : ""} href="#mentor">Mentor</a></li>
                <li><a className={active === "group" ? "active" : ""} href="#group">Group</a></li>
                <li><a className={active === "testimonials" ? "active" : ""} href="#testimonials">Testimonials</a></li>
                <li><a className={active === "pricing" ? "active" : ""} href="#pricing">Pricing</a></li>
                </ul>
            </div>
            <div className='end'>
            <button onClick={() => setNav(true)}>Get Started</button>
            <PiListBold className='PiListBold' onClick={() => setOpen(!open)}/>
                
            {open && ( <ul className='open_list'>
                <li><a className={active === "home" ? "active" : ""} href="#home">Home</a></li>
                <li><a className={active === "courses" ? "active" : ""} href="#courses">Courses</a></li>
                <li><a className={active === "mentor" ? "active" : ""} href="#mentor">Mentor</a></li>
                <li><a className={active === "group" ? "active" : ""} href="#group">Group</a></li>
                <li><a className={active === "testimonials" ? "active" : ""} href="#testimonials">Testimonials</a></li>
                <li><a className={active === "pricing" ? "active" : ""} href="#pricing">Pricing</a></li>
            </ul>  )}
            </div>
        </div>
            {nav && <Form close={()=>{setNav(false)}}/>}
    </div>
  )
}

export default Nav