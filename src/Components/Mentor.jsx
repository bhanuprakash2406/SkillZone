import React from 'react'
import '../style/mentor.css'
import dev1 from '../media/avatar-6.png'
import des1 from '../media/avatar-7.jpg'
import data1 from '../media/avatar-9.jpeg'
import dig1 from '../media/avatar-10.jpeg'
import { IoIosStar } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { CiLinkedin } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";


const Mentor = () => {
  return (
    <section className='mentor' id='mentor'>
      <div className='mentor_head'>
            <small>MENTORS</small>
            <h2>Learn From Industry <span style={{color:'green'}}>Experts</span></h2>
            <p>Our mentors are industry leaders with years of experience in their respective fields.</p>
        </div>
        <div className='mentor_list'>
            <div className='dev card'>
              <div className='img'>
                <img src={dev1} alt="Development" />
                <small>4.9<IoIosStar /></small>
              </div>
              <div className='name'>
                <h3>Bhanuprakash</h3>
                <span>Web Development Expert</span>
              </div>
              <p>5+ years of experience in Web Development, specializing in modern frontend technologies and scalable web applications.</p>
              <div className='foot'>
                <p><span>1.6K</span>Students</p>
                <p><span>10</span>Courses</p>
              </div>
              <div className='icons'>
                <FaXTwitter className='icon'/>
                <FaGithub className='icon'/>
                <CiLinkedin className='icon'/>
              </div>
            </div>
            <div className='dev card'>
              <div className='img'>
                <img src={des1} alt="Design" />
                <small>4.8<IoIosStar /></small>
              </div>
              <div className='name'>
                <h3>Nirmala</h3>
                <span>Graphic Design Artist</span>
              </div>
              <p>3+ years experience in graphic design and visual arts. Former Creative Director at Adobe.</p>
              <div className='foot'>
                <p><span>1.2K</span>Students</p>
                <p><span>8</span>Courses</p>
              </div>
              <div className='icons'>
                <FaXTwitter className='icon'/>
                <FaGithub className='icon'/>
                <CiLinkedin className='icon'/>
              </div>
            </div>
            <div className='dev card'>
              <div className='img'>
                <img src={data1} alt="Science" />
                <small>4.9<IoIosStar /></small>
              </div>
              <div className='name'>
                <h3>S Babu</h3>
                <span>Data Science Specialist</span>
              </div>
              <p>6+ years experience in data analysis and machine learning. Former Data Scientist at Facebook.</p>
              <div className='foot'>
                <p><span>1.8K</span>Students</p>
                <p><span>12</span>Courses</p>
              </div>
              <div className='icons'>
                <FaXTwitter className='icon'/>
                <FaGithub className='icon'/>
                <CiLinkedin className='icon'/>
              </div>
            </div>
            <div className='dev card'>
              <div className='img'>
                <img src={dig1} alt="Marketing" />
                <small>4.7<IoIosStar /></small>
              </div>
              <div className='name'>
                <h3>Pallem Kavya</h3>
                <span>Digital Marketing</span>
              </div>
              <p>4+ years experience in digital marketing and SEO strategies. Former Marketing Manager at Google.</p>
              <div className='foot'>
                <p><span>1.1K</span>Students</p>
                <p><span>9</span>Courses</p>
              </div>
              <div className='icons'>
                <FaXTwitter className='icon'/>
                <FaGithub className='icon'/>
                <CiLinkedin className='icon'/>
              </div>
            </div>
        </div>    
    </section>
  )
}

export default Mentor