import React from 'react'
import Name from './Name'
import ProfilePic from './ProfilePic'
import '../components/styles.css'

const Profile = () => {
  return (
    <div className='profile'>
      <ProfilePic />
      <Name />      
    </div>
  )
}

export default Profile