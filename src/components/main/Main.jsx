import React from 'react'
import Left from '../left/Left'
import Right from '../right/Right'
import './Main.css'

const Main = () => {
  return (
    <div className='main-container'>
        <div className="left-container">
        <Left />
        </div>
        <div className="right-container">
        <Right />
        </div>
    </div>  
  )
}

export default Main