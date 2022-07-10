import React from 'react'
import Announcement from '../components/Announcement/Announcement'
import Categories from '../components/Categories/Categories'
import Footer from '../components/footer/Footer'
import Navbar from '../components/Navbar/Navbar'
import Newletter from '../components/Newsletter/Newletter'
import Products from '../components/Product/Products'
import Slider from '../components/Slider/Slider'

const Home = () => {
  return (
    <div>
      <Announcement/>
        <Navbar/>
        <Slider/>
        <Categories/>
        <Products/>
        <Newletter/>
        <Footer/>
    </div>
  )
}

export default Home