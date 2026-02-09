import React from 'react'
import '../components/styles.css'

const ProfilePic = ({ imgUrl, altText }) => {
  return (
    <div>
      <img src={imgUrl} alt={altText} className='profile-pic' />
    </div>
  )
}

export default ProfilePic