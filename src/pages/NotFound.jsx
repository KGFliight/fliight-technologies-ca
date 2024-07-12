import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer'
import iconCog from '../assets/images/icons/icon-cog.png'
import '../App.css'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {
  const navigate = useNavigate()

  const handleReturnHome = () => {
    navigate('/')
  }
  return (
    <div className="flex flex-col min-h-[100dvh]">
      <Header />

      <div className="flex-1 flex flex-col items-center justify-center text-center px-4 h-80dvh">
        <img
          src={iconCog}
          alt="drone icon"
          className="w-16 h-16 sm:w-20 sm:h-20 my-4"
        />
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-rajdhani font-regular uppercase leading-tight tracking-widest text-ft-white">
          404 Not Found
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl uppercase font-medium my-3 leading-7 sm:leading-8">
          The page you are looking for does not exist.
        </p>
        <button
          onClick={handleReturnHome}
          className="mt-6 px-6 py-2 text-lg sm:text-xl md:text-2xl font-medium uppercase rounded bg-ft-black text-ft-white border border-ft-white hover:bg-ft-white hover:text-ft-black transition duration-300"
        >
          Return to Home
        </button>
      </div>
    </div>
  )
}

export default NotFound
