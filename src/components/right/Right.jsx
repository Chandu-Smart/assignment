import React, { useEffect, useState } from 'react'
import './Right.css'
import icon6 from '../../data/icon6.svg'
import razor from '../../data/razorpay.png'

const Right = () => {

  const [state, setState] = useState()
  const [total, setTotal] = useState()

  useEffect(() => {
    setTotal(Number(state) + 50);
  }, [state])

  return (
    <div className='right-content'>
      <div className="content-container">

        <div className="section-1">
          <div className='options'>
            <span>1</span>
            <small>Sign Up</small>
          </div>
          <div className='options'>
            <span>2</span>
            <small>Subscribe</small>
          </div>
        </div>

        <h3>Select your subcription plan</h3>

        <form action="">
          <div className="section-2">
            <label htmlFor="offer" >
              <input type="radio" name="plan" id="offer" disabled />
              <i class="fa-solid fa-check"></i>
              <span>12 Months Subscription </span>
              <span className="textsmall">
                <span>Total <span className='big'>₹99</span> </span>
                <span>₹8 <small>/mo</small> </span>
              </span>
            </label>
            <label htmlFor="recommended">
              <input type="radio" name="plan" id="recommended"  value={179} onChange={(e) => setState(e.target.value)} />
              <i class="fa-solid fa-check"></i>
              <span>12 Months Subscription </span>
              <span className="textsmall">
                <span>Total <span className='big'>₹179</span> </span>
                <span>₹15 <small>/mo</small> </span>
              </span>
            </label>
            <label htmlFor="6months">
              <input type="radio" name="plan" id="6months" value={149} onChange={(e) => setState(e.target.value)} />
              <i class="fa-solid fa-check"></i>
              <span>6 Months Subscription </span>
              <span className="textsmall">
                <span>Total <span className='big'>₹149</span> </span>
                <span>₹25 <small>/mo</small> </span>
              </span>
            </label>
            <label htmlFor="3months">
              <input type="radio" name="plan" id="3months" value={99} onChange={(e) => setState(e.target.value)} />
              <i class="fa-solid fa-check"></i>
              <span>3 Months Subscription </span>
              <span className="textsmall">
                <span>Total <span className='big'>₹99</span> </span>
                <span>₹33 <small>/mo</small> </span>
              </span>
            </label>
          </div>

          <hr />

          <div className="section-3">
            <p>
              <span>Subscription Fee</span><span>₹18,500</span>
            </p>
            <div>
              <p>
                <span>Limited time offer</span>
                <span style={{ "color": "black" }}>{!state ? "" :<> -{18500 - state}</>}</span>
              </p>
              <p><img src={icon6} alt="" />Offer valid till 25th March 2023</p>
            </div>
            <p>
              <span> <b>Total</b>  (Incl. of 18% GST)</span><span className='bigtext'>{!state ? "" :<> ₹{total}</>}</span>
            </p>
          </div>

          <div className="section-4">
            <button>CANCEL</button>
            <button>PROCEED TO PAY</button>
          </div>
        </form>

        <img src={razor} alt="" />
      </div>
    </div>
  )
}

export default Right