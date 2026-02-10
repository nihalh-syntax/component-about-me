import React from 'react'
import Name from './Name'
import ProfilePic from './ProfilePic'
import Profile from './Profile'
import '../components/styles.css'
import NavBar from './NavBar'
import Hero from './Hero'
import "tailwindcss"

const AboutMe = () => {
  // const userData = {
  //   name: 'Nihal',
  //   imgUrl: './src/assets/keanu.jpg',
  //   altText: 'Profile Pic',
  //   bio: 'I am a passionate web developer with a love for creating dynamic and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, I enjoy bringing ideas to life through code. I am constantly learning and staying up-to-date with the latest web technologies to enhance my skills and deliver high-quality projects.'
  // }
  return (
    <>    
    <div className='main'> 
      <NavBar />
       <div className='pic'>
        <ProfilePic imgUrl={userData.imgUrl} altText={userData.altText} />
      </div>
        <div className='align_text'> 
          <div className='align_top'>
            <Name name={userData.name} />
          </div>
           <div className='align_bottom'> 
              <p>{userData.bio}</p>
           </div>
        </div>
    </div>   
    </>
  )
}

export default AboutMe