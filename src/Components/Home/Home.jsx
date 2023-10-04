import React, { useEffect } from 'react'
import './home.css'
import AOS from 'aos'
import 'aos/dist/aos.css'

const Home = () => {

  useEffect(() =>{
    AOS.init({duration: 1500})
  })

  return (
    <div className='home flex'>
      <h1 className='textoGrande' data-aos='fade-up'>
        É nosso, <br/> 
        é do Brasil
      </h1>
    </div>
  )
}

export default Home