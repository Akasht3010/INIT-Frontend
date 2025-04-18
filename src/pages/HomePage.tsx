import React from 'react'
import Navbar from '../components/Navbar'
import { BackgroundBeams } from '../components/ui/background-beams'
import Landing from '../components/Landing'

const HomePage = () => {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Navbar stays above BackgroundBeams */}
      
      <Navbar />
      <Landing />

      {/* Background animation over black background */}
      <BackgroundBeams className="z-0" />
    </div>
  )
}

export default HomePage
