import React from 'react'
import '../components/styles.css'

const Name = ({ name }) => {
  return (
    <h2 className='name'>Hello, my name is <br /> {name}</h2>
  )
}

export default Name