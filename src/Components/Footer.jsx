import React from 'react'
import '../style/footer.css'
import { SiHyperskill } from "react-icons/si";
import { IoMailOutline } from "react-icons/io5";
import { CiLocationOn } from "react-icons/ci";
import { FaPhoneAlt } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaTelegram } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <section className='footer'>
      <div className='top'>
        <div className='sec-one'>
         <div className='title'>
            <SiHyperskill className="SiHyperskill"/>
            <p>Skill Zone</p>
          </div>
          <span>Empowering millions of learners worldwide with industry-leading courses and expert mentors.</span>
          <div className='address'>
            <p><IoMailOutline className='icon'/>bhanu@skillzone.com</p>
            <p><FaPhoneAlt className='icon'/>+91 6301003350</p>
            <p><CiLocationOn className='icon'/>Tirupati, Andra Pradesh</p>
          </div>
      </div>
      <div className='sec-two'>
        <ul>
          <p>Product</p>
          <li>Features</li>
          <li>Pricing</li>
          <li>Courses</li>
          <li>Community</li>
        </ul>
        <ul>
          <p>Company</p>
          <li>About Us</li>
          <li>Careers</li>
          <li>Blog</li>
          <li>Press</li>
        </ul>
        <ul>
          <p>Support</p>
          <li>Help Center</li>
          <li>Contact Us</li>
          <li>Privacy Policy</li>
          <li>Terms of Service</li>
        </ul>
        <ul>
          <p>Help Center</p>
          <li>Web Development</li>
          <li>UI/UX Design</li>
          <li>Data Science</li>
          <li>Marketing</li>
        </ul>
      </div>
      </div>
      <div className='bottom'>
        <div className='sec-one'>
          <a href='#'>Terms and Conditions</a>
          <a href='#'>Privacy Policy</a>
          <p>© 2026 Skill Zone. All rights reserved</p>
        </div>
        <div className='sec-two'>
          <p>Follow us on</p>
          <ul>
            <li><FaFacebook className='icon' style={{backgroundColor:'white', color:'blue'}}/></li>
            <li><RiInstagramFill className='icon' style={{background: 'white', color:'#fd1d1d' }}/></li>
            <li><FaLinkedin className='icon' style={{backgroundColor:'white', color:'#084f78'}}/></li>
            <li><FaXTwitter className='icon' style={{backgroundColor:'white', color:'black'}}/></li>
            <li><FaTelegram className='icon' style={{backgroundColor:'white', color:'#0994e4'}}/></li>
            <li><FaYoutube className='icon' style={{backgroundColor:'white', color:'red'}}/></li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Footer