import { FavoriteBorderOutlined, SearchOutlined, ShoppingCartOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

import {Mobile} from "../Responsive"

import {Link} from "react-router-dom"


const Info = styled.div`
          opacity:0;
          width:100% ;
          height:100%;
          position: absolute;
          display: flex;
          z-index: 3;
          background-color: rgba(0,0,0,0.2);
          align-items: center;
          justify-content: center;
          transition: all 0.5s ease ;
           /* ${Mobile({height:"",width:"150px"})} */ 
`
const Icon = styled.div`
          width: 40px;
          height:40px;
          border-radius: 50%;
          background-color: white;
          display: flex;
          align-items: center;
          justify-content: center;
          margin:10px; 
          /* transition:all 0.5s ease ; */
          
          &:hover{
                    transform: scale(1.1);
          }
          ${Mobile({height:"40px",width:"40px", margin:"10px",})}
`
const Container = styled.div`
          flex:1;
          margin: 5px;
          flex-direction:column;
          //min-width: 280px;
          height: 350px;
          display: flex;
          justify-content: center;
          align-items: center;
          background-color:#f5fbfd ;
          position: relative;
          cursor: pointer;
          &:hover ${Info}{ // it means Change the "mentioned below" Property of Info segment  when Hovering above Container
                    opacity:1;
                    // so basically when we are Hovering above the container the  Info segment's  Opacity property will turn from 0 to 1 
          }
          ${Mobile({height:"300px",flexDirection:"row"})}
`
const ImageBox = styled.div`
          width:280px;
          height:280px;
          display: flex;
          position:relative;
          align-items:center;
          justify-content: center;
          ${Mobile({height:"200px"})
          }
`
const Circle = styled.div`
          width:75%;
          height:98%;
          border-radius:50% ;
          background-color: white;
          position: absolute;
          z-index: 0;
          ${Mobile({height:"235px",width:"220px"})}

`
const Image = styled.img`
          height:90%;
          width:70%;
          display:flex;
          z-index: 1;
          /* padding-top: 10px; */
          border-radius: 50%;
          /* width:75% ; */
          /* object-fit:cover; */
          ${Mobile({height:"230px",width:"210px"})} 
`
const DescBox = styled.div`
          padding:5px;
          text-align:center;
          ${Mobile({display:"flex",flexDirection:"column", justifyContent:"center",alignItems:"center",textAlign:"center"})};
`
const Title = styled.h2`
          padding-top: 10px;
          font-size:14px;
          z-index:1;
`
const Price = styled.h2`
          padding-top:10px;
          font-size:18px;
          z-index:1;
`


const Product = ({item}) => {
return (
<Container>
          <ImageBox>
                    <Circle/>  
                    <Image src={item.img} />
          </ImageBox>
          <DescBox>
                    <Title>{item.title}</Title>
                    <Price>${item.price}</Price>
          </DescBox>
          <Info>
                    {/* <h1>{item.id}</h1> */}
                    <Icon>
                              <ShoppingCartOutlined/>
                    </Icon>
                    <Icon>
                              <Link style={{color:"black"}} to={`/product/find/${item._id}`}>
                              <SearchOutlined />
                              </Link>
                    </Icon>
                    <Icon>
                              <FavoriteBorderOutlined />
                    </Icon>
          </Info>          
</Container>
          )
}

export default Product
