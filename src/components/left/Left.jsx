import React from 'react'
import './Left.css'
import icon1 from '../../data/icon1.svg'
import icon2 from '../../data/icon2.png'
import icon3 from '../../data/icon3.png'
import icon4 from '../../data/icon4.png'
import icon5 from '../../data/icon5.png'

const Left = () => {
    return (
        <div className='left-content'>
            <p>Access curated courses worth</p>
            <p>₹ <del style={{ "color": "red" }}> <span style={{ "color": "white" }}> 18,500</span></del> at just <span className='colorblue'>₹ 99</span>  per year!</p>
            <ul>
                <li> <img src={icon1} alt="" /> <span className='colorblue'>100+ &nbsp;</span>Job relevant courses</li>
                <li> <img src={icon2} alt="" /> <span className='colorblue'>20,000+ &nbsp;</span> Hours of content</li>
                <li> <img src={icon3} alt="" /> <span className='colorblue'>Exclusive &nbsp;</span> webiner access</li>
                <li> <img src={icon4} alt="" />Scholarship worth &nbsp;<span className='colorblue'>₹94,000</span></li>
                <li> <img src={icon5} alt="" /> <span className='colorblue'> Ad Free &nbsp;</span> learning expirence</li>
            </ul>
        </div>
    )
}

export default Left