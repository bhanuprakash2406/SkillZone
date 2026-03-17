import React from 'react'
import '../style/pricing.css';
import { BsCheck2 } from "react-icons/bs";

const Pricing = () => {
  return (
    <section className='pricing' id='pricing'>
      <div className='pricing_head'>
            <small>PRICING</small>
            <h2>Simple, Transparent <span style={{color:'green'}}>Pricing</span></h2>
            <p>Choose the plan that fits your learning goals. No hidden fees, cancel anytime.</p>
        </div>
         <div className='pricing_list'>
            <div className='start card'>
              <div className='head'>
                <p>Starter</p>
                <span>Perfect for beginners</span>
                <h4>Free</h4>
              </div>
              <ul>
                <li><BsCheck2 className='icon'/>Access to 10 free courses</li>
                <li><BsCheck2 className='icon'/>Basic community access</li>
                <li><BsCheck2 className='icon'/>Email support</li>
                <li><BsCheck2 className='icon'/>Mobile app access</li>
                <li><BsCheck2 className='icon'/>Course completion certificates</li>
              </ul>
              <button>Get Started</button>
            </div>
            <div className='pro card'>
              <div className='head'>
                <small>Most popular</small>
                <p>Pro</p>
                <span>Most popular choice</span>
                <h4>₹999<span>/month</span></h4>
              </div>
              <ul>
                <li><BsCheck2 className='icon'/>Unlimited course access</li>
                <li><BsCheck2 className='icon'/>Full community features</li>
                <li><BsCheck2 className='icon'/>Priority support 24/7</li>
                <li><BsCheck2 className='icon'/>Downloadable resources</li>
                <li><BsCheck2 className='icon'/>Live Q&A sessions</li>
                <li><BsCheck2 className='icon'/>Project reviews</li>
                <li><BsCheck2 className='icon'/>Career coaching</li>
              </ul>
              <button className='btn'>Start Pro Trail</button>
            </div>
            <div className='enter card'>
              <div className='head'>
                <p>Enterprise</p>
                <span>For teams & organizations</span>
                <h4>₹1999 <span>/month</span></h4>
              </div>
              <ul>
                <li><BsCheck2 className='icon'/>Everything in Pro</li>
                <li><BsCheck2 className='icon'/>Custom learning paths</li>
                <li><BsCheck2 className='icon'/>Team analytics dashboard</li>
                <li><BsCheck2 className='icon'/>Dedicated success manager</li>
                <li><BsCheck2 className='icon'/>Custom integrations</li>
                <li><BsCheck2 className='icon'/>SSO authentication</li>
                <li><BsCheck2 className='icon'/>Invoice billing</li>
              </ul>
              <button>Contact Sales</button>
            </div>
          </div>  
          <div className='foot'><p>All plans include a 14-day money-back guarantee. No questions asked.</p></div>
    </section>
  )
}

export default Pricing