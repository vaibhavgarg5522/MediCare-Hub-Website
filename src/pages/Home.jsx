import React from 'react'
import Header from '../components/header/Header'
import SpecialityMenu from '../components/specialitymenu/SpecialityMenu'
import TopDoctors from '../components/topdoctors/TopDoctors'
import Banner from '../components/banner/Banner'


const Home = () => {
  return (
    <div>
      <Header></Header>
      <SpecialityMenu></SpecialityMenu>
      <TopDoctors></TopDoctors>
      <Banner></Banner>
      
    </div>
  )
}

export default Home