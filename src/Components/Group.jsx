import React from 'react'
import '../style/group.css'
import { RxPeople } from "react-icons/rx";
import { FiMessageCircle } from "react-icons/fi";
import { IoMdCalendar } from "react-icons/io";
import { PiBellRingingLight } from "react-icons/pi";
import { AiOutlineGlobal } from "react-icons/ai";
import { FaRegHandshake } from "react-icons/fa";
import photo1 from '../media/avatar-6.png'
import photo2 from '../media/avatar-7.jpg'
import photo3 from '../media/avatar-9.jpeg'
import photo4 from '../media/avatar-10.jpeg'
import photo5 from '../media/photo2.jpeg'
import photo6 from '../media/photo6.jpeg'
import photo7 from '../media/avatar-5.jpg'
import photo8 from '../media/photo3.jpeg'
import photo9 from '../media/photo1.jpeg'

const Group = () => {
  return (
    <section className='group' id='group'>
      <div className='detials'>
        <div className='group_head'>
            <small>COMMUNITY</small>
            <h2>Join Our Thriving <span style={{color:'green'}}>Learning Community</span></h2>
            <p>Learning is better together. Join our community of 50,000+ students and unlock collaborative features that accelerate your growth.</p>
        </div>
        <div className='group_data'> 
          <ul>
            <li>
          <RxPeople className='icon'/>
          <div className='data'>
            <p>Study Groups</p>
            <span>Connect with like-minded learners and form study groups for collaborative learning.</span>
          </div>
          </li>
            <li><FiMessageCircle className='icon'/>
          <div className='data'>
            <p>Discussion Forums</p>
            <span>Engage in meaningful discussions and get answers from peers and mentors.</span>
          </div>
          </li>
            <li><IoMdCalendar className='icon'/>
          <div className='data'>
            <p>Live Sessions</p>
            <span>Join live Q&A sessions and workshops with industry experts.</span>
          </div>
          </li>
            <li><PiBellRingingLight className='icon'/>
          <div className='data'>
            <p>Peer Support</p>
            <span>Get help and support from fellow learners anytime you need it.</span>
          </div>
          </li>
            <li><AiOutlineGlobal className='icon'/>
          <div className='data'>
            <p>Global Community</p>
            <span>Connect with students from 150+ countries worldwide.</span>
          </div>
          </li>
            <li><FaRegHandshake className='icon'/>
          <div className='data'>
            <p>Project Collaboration</p>
            <span>Work on real-world projects with your peers.</span>
          </div>
          </li>
          </ul> 
        </div>
        <button>Join Community</button>
      </div>
      <div className='group_list'>
        <div className='top data'>
          <FiMessageCircle className='icon'/>
          <div className='text'>
            <p>24/7 Support</p>
            <span>Always here</span>
          </div>
        </div>
        <div className='album'>
          <img src={photo1} alt='Avatar'/>
          <img src={photo2} alt='Avatar'/>
          <img src={photo3} alt='Avatar'/>
          <img src={photo4} alt='Avatar'/>
          <img src={photo5} alt='Avatar'/>
          <img src={photo6} alt='Avatar'/>
          <img src={photo7} alt='Avatar'/>
          <img src={photo8} alt='Avatar'/>
          <img src={photo9} alt='Avatar'/>
        </div>
        <div className='bottom data'>
          <AiOutlineGlobal className='icon'/>
          <div className='text'>
            <p>5+ Countries</p>
            <span>Worldwide reach</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Group