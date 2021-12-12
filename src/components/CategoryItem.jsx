import React from 'react'

import styled from 'styled-components'
import { Mobile } from '../Responsive'
import { Link } from 'react-router-dom'
const Container = styled.div`
          flex:1;
          margin:3px;
          position:relative;
`
const Image = styled.img`
          width:100%;
          height: 100%;
          object-fit:cover;
          ${Mobile({height:"35vh",objectFit:"cover"})}
`
const Title = styled.h1`
          font-size:20px;
          color:white;
          margin-bottom:20px;
          text-decoration: none;
`

const Info = styled.div`
          position:absolute;
          top:0;
          left:0;
          width:100%;
          height:100%;
          display:flex;
          flex-direction:column;
          align-items:center;
          justify-content:center;
          margin-top:${props=>props.name ==="button" && "40px"};

`
const Button = styled.button`
          border:none;
          padding:10px;
          color:grey;
          font-size:20px;
          cursor: pointer;
          //background-color: transparent;
          transition: all 0.5s;
          border-radius: 15px;
          &:hover{
          transform:scale(1.25);}
`

const CategoryItem = ({item}) => {
          console.log(item.title)
          return (
                    <Container>
                    <Image src={item.img}/>
                    <Info>
                    <Title>{item.title}</Title>
                    </Info>
                    <Info name="button">
                    <Link style={{"textDecoration":"none"}} to={`/products/${item.category}`}>
                    <Button>Shop Now</Button>
                    </Link>
                    </Info>
                    </Container>
          )
          
}

export default CategoryItem
