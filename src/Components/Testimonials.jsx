import React from 'react';
import '../style/testimonials.css';
import { IoIosStar } from "react-icons/io";
import { IoIosStarHalf } from "react-icons/io";
import { SiComma } from "react-icons/si";
import avatar1 from "../media/review-1.jpg";
import avatar2 from "../media/review-2.jpg";
import avatar3 from "../media/review-3.jpg";
import avatar4 from "../media/review-4.jpg";
import avatar5 from "../media/review-5.jpg";
import avatar6 from "../media/review-6.jpg";

const Testimonials = () => {
  return (
    <section className='testimonials' id='testimonials'>
      <div className='test_head'>
            <small>TESTIMONIALS</small>
            <h2>Learn From Industry <span style={{color:'green'}}>Experts</span></h2>
            <p>Our mentors are industry leaders with years of experience in their respective fields.</p>
        </div>
        <div className='test_list'>
            <div className='card'>
              <div className='star'>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStarHalf className='icon'/>
              </div>
              <div className='con'>
                <span><SiComma className='icon'/><SiComma className='icon'/></span>
                <p>"LearnHub completely transformed my career. The web development bootcamp gave me the skills I needed to land my dream job at Meta. The mentors are incredible!"</p>
              </div>
              <div className='foot'>
                <img src={avatar1} alt='avatar'/>
                <div className='details'>
                  <p>Alex Thompson</p>
                  <span>Software Developer at Meta</span>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='star'>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
              </div>
              <div className='con'>
                <span><SiComma className='icon'/><SiComma className='icon'/></span>
                <p>"The UI/UX design course was exactly what I needed. The practical projects and mentor feedback helped me build a portfolio that got me hired at Spotify."</p>
              </div>
              <div className='foot'>
                <img src={avatar2} alt='avatar'/>
                <div className='details'>
                  <p>Jessica Lee</p>
                  <span>UX Designer at Spotify</span>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='star'>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStarHalf className='icon'/>
              </div>
              <div className='con'>
                <span><SiComma className='icon'/><SiComma className='icon'/></span>
                <p>"I switched careers from marketing to data science thanks to LearnHub. The structured curriculum and supportive community made the transition seamless."</p>
              </div>
              <div className='foot'>
                <img src={avatar3} alt='avatar'/>
                <div className='details'>
                  <p>David Park</p>
                  <span>Data Analyst at Amazon</span>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='star'>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStarHalf className='icon'/>
              </div>
              <div className='con'>
                <span><SiComma className='icon'/><SiComma className='icon'/></span>
                <p>"As a freelancer, I needed flexible learning. LearnHub's self-paced courses fit perfectly into my schedule. Highly recommend!"</p>
              </div>
              <div className='foot'>
                <img src={avatar4} alt='avatar'/>
                <div className='details'>
                  <p>Maria Garcia</p>
                  <span>Freelance Designer</span>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='star'>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
              </div>
              <div className='con'>
                <span><SiComma className='icon'/><SiComma className='icon'/></span>
                <p>"The marketing course helped me understand how to grow my startup. The ROI has been incredible - best investment in my education."</p>
              </div>
              <div className='foot'>
                <img src={avatar5} alt='avatar'/>
                <div className='details'>
                  <p>James Wilson</p>
                  <span>Startup Founder</span>
                </div>
              </div>
            </div>
            <div className='card'>
              <div className='star'>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStar className='icon'/>
                <IoIosStarHalf className='icon'/>
              </div>
              <div className='con'>
                <span><SiComma className='icon'/><SiComma className='icon'/></span>
                <p>"The combination of technical and business courses gave me a unique edge. I've recommended LearnHub to all my colleagues."</p>
              </div>
              <div className='foot'>
                <img src={avatar6} alt='avatar'/>
                <div className='details'>
                  <p>Emily Chen</p>
                  <span>Product Manager at Google</span>
                </div>
              </div>
            </div>
        </div>    
      </section>
  )
}

export default Testimonials