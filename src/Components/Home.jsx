import React, { useState } from 'react'
import '../style/Home.css'
import { MdArrowRightAlt } from "react-icons/md";
import { TbBrandYoutube } from "react-icons/tb";
import { BsPeople } from "react-icons/bs";
import { IoBookOutline } from "react-icons/io5";
import { GiAchievement } from "react-icons/gi";
import { FaCirclePlay } from "react-icons/fa6";
import { MdClose } from "react-icons/md";
import Form from './Form';
import video from '../media/Online-Education.mp4'
import heroImg from '../media/hero-img.jpg'
import avatar2 from '../media/avatar-2.jpg'
import avatar3 from '../media/avatar-3.jpg'
import avatar4 from '../media/avatar-4.jpg'

const Home = () => {
  
  const [open, setOpen] = useState(false);

  const [play, setPlay] = useState(false);

  return (
    <section className='home' id='home'>
      <div className='home_body'>
          <ul><li>New Courses Available</li></ul>
          <h2>Master New Skills <br/><span style={{color:'green'}}>Online Anytime,</span><br/> Anywhere</h2>
          <p>Join over 5,000+ students learning from world-class mentors. Transform your career with industry-leading courses.</p>
        <div className='home_btn'>
          <button className='home-bt' onClick={() => setOpen(true)}>Start Learning <MdArrowRightAlt className='MdArrowRightAlt'/></button>
          {open && <Form close={()=>{setOpen(false)}}/>}
          <button className='home-bt'><TbBrandYoutube className='TbBrandYoutube'/>YouTube Channel </button>
        </div>
        <div className='home_cont'>
          <p><BsPeople className='icon'/> <span>5K+</span> Students</p>
          <p><IoBookOutline className='icon'/> <span>10+</span> Courses</p>
          <p><GiAchievement className='icon'/> <span>4.9</span> Rating</p>
        </div>
      </div>
      <div className='home_media'>
        <div className="media">
          <div className="video-thumb" onClick={() => setPlay(true)}>
            <img src={heroImg} alt="thumbnail"/>
              <FaCirclePlay className="play-btn"/>
              <div className='top_cont'>
                <div className='img'>
                  <img src={avatar2} alt="avatar" />
                  <img src={avatar3} alt="avatar" />
                  <img src={avatar4} alt="avatar" />
                </div>
                <div className='text'>
                  <p>Join 5k+</p>
                  <span>Students</span>
                </div>
              </div>
              <div className='footer_cont'>
                <IoBookOutline className='footer_cont_icon'/>
                <div className='text'>
                  <p>10+ Courses</p>
                  <span>Available Now</span>
                </div>
              </div>
          </div>
          {play && (
            <div className="video-popup">
              <button className="close-btn" onClick={() => setPlay(false)}>
                <MdClose />
              </button>
              <video width="600" controls><source src={video} type="video/mp4"/></video>
            </div>
          )}
      </div>
      </div>
    </section>
  )
}

export default Home