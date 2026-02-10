import './App.css'
import AboutMe from './components/AboutMe.jsx'
import Profile from './components/Profile.jsx'
import { Routes, Route } from 'react-router-dom'
import Hero from './components/Hero.jsx'
// import '../components/styles.css'

function App() {
  return (
    <div className='app'>
      {/* <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/about" element={<AboutMe />} />
        <Link to="/about" className='text-center mt-4 text-lg text-gray-300 hover:text-gray-500'>Learn more about me</Link>
      </Routes> */}
      <Hero />
    </div>
  )
}

export default App
