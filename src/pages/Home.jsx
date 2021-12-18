
import React from 'react'
import { Announcement } from '../components/Announcement'
import Navbar from '../components/Navbar'
import Slider from '../components/Slider'
import Categories from '../components/Catagories'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import styled from 'styled-components'
import { Mobile } from '../Responsive'
const Heading = styled.p`
          height:30px;
          width:100%;
          text-align: center;
          padding-bottom:20px;
          margin-bottom:20px;
          font-weight:1000;
          font-size:50px;
          text-transform: capitalize;
          ${Mobile({height:"20px", fontSize:"20px", paddingBottom:"5px",marginBottom:"5px" })}
`


const Home = () => {
          return (
                    <div>
                    <Announcement/>
                    <Navbar/>
                    <Slider/> 
                    <Categories/>
                    <Heading>Popular Products</Heading>
                    <Products/> 
                    <Newsletter/> 
                    <Footer/>
                    </div>
          )
}

export default Home

