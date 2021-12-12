import {React,useState} from 'react'

import { Announcement } from '../components/Announcement'
import Navbar from '../components/Navbar'

import Filters from '../components/Filters'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
import Footer from '../components/Footer'

import { useLocation } from 'react-router'

const PrductList = () => {
          const [filter,setFilter]= useState({})
          const [sort,setSort]= useState("new")

          const location = useLocation()
          const category = location.pathname.split("/")[2]

          console.log("category",category)
          return (
                    <div>
                    <Announcement/>
                    <Navbar/>  
                    <Filters filter={filter} setFilter={setFilter} category={category} setSort={setSort}/> 
                    <Products category={category} sort={sort} filter={filter} />
                    <Newsletter/>
                    <Footer/> 
                    </div>
          )
}

export default PrductList
