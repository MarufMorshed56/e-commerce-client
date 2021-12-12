import React, { useState, useEffect } from 'react'


import { popularProducts } from '../Data'
import styled from 'styled-components'
import Product from "./Product"

import { Mobile } from '../Responsive'

import { useLocation } from 'react-router'

const axios = require('axios')

const  Container = styled.div`
          padding:20px;
          display:flex;
          flex-wrap: wrap;
          justify-content: space-between;
          ${Mobile({padding:"2px",})}
          
` 
const Products = ({sort,filter,category}) => {//  const Products = ({sort,filter,category})  here '{}' bracket is very important as without it react will ignore 'filter' & 'category' & just store  every value inside the first variable which is "sort" in this case
          const [products,setProducts] = useState([])

          const[filteredProducts, setFilteredProducts]= useState([])
          const location = useLocation()
          var url= location.pathname.split("/")[1]?location.pathname.split("/")[1]:false

          console.log("url",location.pathname,url)

          useEffect(()=>{
                    const getProducts = async()=>{
                    try {     
                              // console.log("msg",sort,category,filter)
                              // const res = await axios.get("http://localhost:5000/api/v1/products")
                              const res =await axios.get( category ? `http://localhost:5000/api/v1/products?category=${category}`: "http://localhost:5000/api/v1/products")
                              setProducts(res.data)

                              console.log(res)

                    } catch (error) {
                                        
                    }
                    }
                    getProducts()
          },[category])

useEffect(()=>{        
          if(url==="products"){
          setFilteredProducts(products.filter((item)=> Object.entries(filter).every(([key,value])=>item[key].includes(value))))}},[products,category,filter])
          // ekhane first e 

useEffect(()=>{
          if(sort==="new"){
                    setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.createdAt-b.createdAt))
          }else if(sort ==="aesc"){
                    setFilteredProducts((prev)=>[...prev].sort((a,b)=>a.price - b.price))
          }else if(sort === "desc"){
                    setFilteredProducts((prev)=>[...prev].sort((a,b)=> b.price - a.price))
          }

},[sort])


          console.log(sort)
          return (
                    <Container>
                    {!url ? products.slice(0,8).map((item)=>(<Product item={item} key={item.id}/>)) : filteredProducts.map((item)=>(<Product item={item} key={item.id}/>))}
                    </Container>
          )
}

export default Products
