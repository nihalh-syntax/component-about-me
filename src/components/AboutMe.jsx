import React from 'react'
import Profile from './Profile'
import '../components/styles.css'

const AboutMe = () => {
  return (
    <>
    <div className='align'>
      <div className='align_top'>
        <Profile />
      </div>
      <div className='align_bottom'>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas, voluptate.</p>
      </div>     
    </div> 
    </>
  )
}

export default AboutMe