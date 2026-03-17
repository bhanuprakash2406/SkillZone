import React, { useState } from 'react'
import '../style/courses.css'
import dev from '../media/course-img-1.jpg'
import des from '../media/course-img-2.jpg'
import data from '../media/course-img-3.jpg'
import dig from '../media/course-img-4.jpg'
import dev1 from '../media/avatar-6.png'
import des1 from '../media/avatar-5.jpg'
import data1 from '../media/avatar-9.jpeg'
import dig1 from '../media/avatar-10.jpeg'
import { IoIosStar } from "react-icons/io";
import { RxPeople } from "react-icons/rx";
import { CiClock2 } from "react-icons/ci";
import { MdArrowRightAlt } from "react-icons/md";
import Form from './Form';


const Course = () => {

    const [open, setOpen] = useState(false);

  return (
    <section className='courses' id='courses'>
        <div className='couse_head'>
            <small>COURSE</small>
            <h2>Explore Our Popular <span style={{color:'green'}}>Courses</span></h2>
            <p>Choose from hundreds of courses designed by industry experts to help you achieve your goals.</p>
        </div>
        <div className='course_list'>
            <div className='dev card'>
                <div className='img'>
                    <small style={{backgroundColor:'orange'}}>Development</small>
                    <img src={dev} alt='Web Development' />
                </div>
                <div className='con'>
                    <h4>Web Development</h4>
                    <div className='profile'>
                    <img src={dev1} alt='Development'/>
                    <p>Bhanuprakash</p>
                    </div>
                    <ul>
                        <li><CiClock2 />12 weeks</li>
                        <li><RxPeople />1.6K</li>
                        <li><IoIosStar style={{color:'gold'}}/>4.9</li>
                    </ul>
                </div>
                <div className='foot'>
                    <h3>₹7,999/-</h3>
                    <button onClick={() => setOpen(true)}>Enroll now <MdArrowRightAlt style={{fontSize:'20px'}}/></button>
                </div>
            </div>
            <div className='des card'>
                <div className='img'>
                    <small style={{backgroundColor:'#F54927'}}>Design</small>
                    <img src={des} alt='UI/UX Design' />
                </div>
                <div className='con'>
                    <h4>UI/UX Design</h4>
                    <div className='profile'>
                    <img src={des1} alt='Design'/>
                    <p>Parvathi</p>
                    </div>
                    <ul>
                        <li><CiClock2 />8 weeks</li>
                        <li><RxPeople />1.2K</li>
                        <li><IoIosStar style={{color:'gold'}}/>4.8</li>
                    </ul>
                </div>
                <div className='foot'>
                    <h3>₹4,999/-</h3>
                    <button onClick={() => setOpen(true)}>Enroll now <MdArrowRightAlt style={{fontSize:'20px'}}/></button>
                </div>
            </div>
            <div className='data  card'>
                <div className='img'>
                    <small style={{backgroundColor:'#2795F5'}}>Data Science</small>
                    <img src={data} alt='Data Science & Analytics' />
                </div>
                <div className='con'>
                    <h4>Data Science & Analytics</h4>
                    <div className='profile'>
                    <img src={data1} alt='Science'/>
                    <p>S Babu</p>
                    </div>
                    <ul>
                        <li><CiClock2 />16 weeks</li>
                        <li><RxPeople />1.8K</li>
                        <li><IoIosStar style={{color:'gold'}}/>4.9</li>
                    </ul>
                </div>
                <div className='foot'>
                    <h3>₹9,999/-</h3>
                    <button onClick={() => setOpen(true)}>Enroll now <MdArrowRightAlt style={{fontSize:'20px'}}/></button>
                </div>
            </div>
            <div className='dig  card'>
                <div className='img'>
                    <small style={{backgroundColor:'#1FBF54'}}>Marketing</small>
                    <img src={dig} alt='Digital Marketing' />
                </div>
                <div className='con'>
                    <h4>Digital Marketing</h4>
                    <div className='profile'>
                    <img src={dig1} alt='Digital'/>
                    <p>Pallem Kavya</p>
                    </div>
                    <ul>
                        <li><CiClock2 />6 weeks</li>
                        <li><RxPeople />1.1K</li>
                        <li><IoIosStar style={{color:'gold'}}/>4.7</li>
                    </ul>
                </div>
                <div className='foot'>
                    <h3>₹2,999/-</h3>
                    <button onClick={() => setOpen(true)}>Enroll now <MdArrowRightAlt style={{fontSize:'20px'}}/></button>
                </div>
            </div>
        </div>
        <button className='course_btn'>View All Couses <MdArrowRightAlt style={{fontSize:'30px'}}/></button>
        {open && <Form close={()=>{setOpen(false)}}/>}
    </section>
  )
}

export default Course