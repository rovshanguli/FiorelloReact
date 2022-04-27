import React from 'react'
import Blog from '../components/Blog'
import Category from '../components/Category'
import Experts from '../components/Experts'
import Footer from '../components/Footer'
import Menu from '../components/Menu'
import Slider from '../components/Slider'
import Subscripe from '../components/Subscripe'
import Valentin from '../components/Valentin'

function Home() {
  return (
    <div>
        <Menu></Menu>
        <Slider></Slider>
        <Category></Category>
        <Valentin></Valentin>
        <Experts></Experts>
        <Subscripe></Subscripe>
        <Blog></Blog>
        <Footer></Footer>
        
    </div>
  )
}

export default Home