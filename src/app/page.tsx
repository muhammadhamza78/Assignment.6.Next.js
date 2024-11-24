import Hero from '../components/Hero'
import Header from '../components/Header'
import Navbar from '../components/Navbar'
import CourseCat from '../components/Coursecat'
import Achievement from '../components/Achievement'
import Course from '../components/Course'
import Team from '../components/Team'
import React from 'react'
import Testimonial from '../components/Testimonial'
import Footer from '../components/Footer'

const page = () => {
  return (
    <div>
      <Header />
      <Navbar />
      <Hero />
      <CourseCat />
      <Achievement />
      <Course />
      <Team />
      <Testimonial />
      <Footer />
    </div>
  )
}

export default page


