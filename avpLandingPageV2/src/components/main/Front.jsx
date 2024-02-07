import React from 'react'
import bgAnimation from '../assets/bgAnimation.webp'
// import './MainPage.css'; // Import the CSS file for Tailwind styles

const MainPage = () => {
  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about')
    aboutSection.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <div
      id="home"
      className="bg-cover bg-center bg-no-repeat flex justify-center items-center flex-col text-center h-screen opacity-80"
      style={{ backgroundImage: `url(${bgAnimation})` }}
    >
      <h1 className="text-white text-3xl font-bold  text-shadow-md max-w-80 mx-auto">
        A V P <br />
        Enginner's Group
      </h1>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 mt-4 rounded"
        onClick={scrollToAbout}
      >
        Why Us?
      </button>
    </div>
  )
}

export default MainPage
