import React from 'react'

import styled from 'styled-components'
import {categories} from '../Data'
import CategoryItem from './CategoryItem'
import { Mobile } from '../Responsive'

const Container = styled.div`
          // height:100vh;
          display: flex;
          padding:20px;
          justify-content: center;
          ${Mobile({padding:"0px",flexDirection:"column"})}
`


const Catagories = () => {
          return (
                    <Container>
                    {categories.map((item)=>(
                    //<Title>{item.title}</Title>
                    <CategoryItem item ={item} key={item.id}/>

                    //{console.log(h)}
                    ))}
                    </Container>
          )
}

export default Catagories