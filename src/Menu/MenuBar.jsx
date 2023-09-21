import React from 'react'
import Navbar from '../Components/Navbar/Navbar'
import TopDish from '../Components/TopDish/TopDish'
import AllDish from '../Components/AllDish/AllDish'

export default function MenuBar() {
  return (
    <div>
      <Navbar/>
      <TopDish />
      <AllDish />
    </div>
  )
}
