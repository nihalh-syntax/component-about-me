import React from 'react'
import Name from './Name'
import ProfilePic from './ProfilePic'
import '../components/styles.css'

const Profile = ({ bio }) => {
  return (
    <div>
      {/* <ProfilePic />
      <Name />    */}
      <h3>About Me</h3>
      <p>{bio}</p>
        {/* <p>I am a passionate web developer with a love for creating dynamic and user-friendly websites. With a strong foundation in HTML, CSS, and JavaScript, 
          I enjoy bringing ideas to life through code. I am constantly learning and staying up-to-date with the latest web technologies to enhance my skills 
          and deliver high-quality projects.</p> */}
    </div>
  )
}

export default Profile