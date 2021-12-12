import React from 'react'

import { Badge } from '@material-ui/core'
import { Search, ShoppingCartOutlined } from '@material-ui/icons'

import { Link } from 'react-router-dom'


import styled from 'styled-components'

import { Mobile,Tab } from '../Responsive'

// import PageviewIcon from '@mui/icons-material/Pageview';

// import { AiOutlineSearch } from "react-icons/vsc";

//Redux
import {useSelector} from "react-redux"


const Container = styled.div`
          height:100px;
          // background-color:black;
          /* @media only screen and (max-width:380px){
            display: none;
          } */
          /* display:flex; */
          ${Tab({display:"flex",flexDirection:"column"})}
          ${Mobile({display:"flex",flexDirection:"column", height:"80px", margin:"0px"})}
          
`
const Wrapper = styled.div`
          padding:0px 100px;
          display:flex;
          justify-content:space-between;
          align-items:center;
          /* background-color: black; */
          ${Tab({ paddingLeft:"40px",paddingRight:"40px"})}
          ${Mobile({ padding:"5px",justifyContent:"space-around"})}
`


const Left = styled.div`
/* flex:1;  */
//one unit of the total display & with Left Center Right the total Display is 3 Units
display:flex;
align-items: center;
`
const Language = styled.span`
          font-size:14px;
          cursor:pointer;
          ${Mobile({display:"none"})}
`
const SeachContainer = styled.div`
          // width:200px;
          padding:5px;
          margin-left:25px;
          display:flex;
          border:1px solid lightgrey;
          ${Tab({marginLeft:"10px"})}
          text-align: center;
          ${Mobile({marginLeft:"5px"})}
          
`
const Input = styled.input`
          font-size: 20px;
          border:none;
          ${Tab({ fontSize:"12px"})}
          ${Mobile({ fontSize:"12px",width:"50px"})}

`

const Top = styled.div`
flex:1;
padding-top:5px;
margin-bottom:-5px;
`
const Logo = styled.h1`
          font-weight: bold;
          text-align: center;
          ${Mobile({ fontSize:"24px",})}
`

const Right = styled.div`
          /* flex:1; */
          display:flex;
          align-items:center;
          justify-content :flex-end;
          ${Mobile({justifyContent:"center"})}
  `
const MenuItem = styled.div`
          font-size: 20px;
          font-weight:600;
          /* padding: 0px 10px; */
          cursor: pointer;
          margin-left:25px;
          ${Tab({ fontSize:"14px",padding:"10px", marginLeft:"10px"})}
          ${Mobile({ fontSize:"12px",
          padding:"5px",margin:"0px"})}
  `

const Navbar = () => {
          //Redux//
          const cartQuantity = useSelector(state => state.cart.quantity)
          console.log("redux",cartQuantity)

          return (
          <Container>
            <Top>
          <Logo>MAHA</Logo>
          </Top>
          <Wrapper>
                    <Left>
                    <Language>EN</Language>
                    <SeachContainer>
                    <Input placeholder="Search"/>
          <Search style={{color:"grey",fontsize:16}}/>
          </SeachContainer>                     
          </Left>
          <Right>
                    <Link style={{"textDecoration":"none", "color":"black"}} to="/">
                    <MenuItem>Home</MenuItem>
                    </Link>
                    
                    <Link style={{"textDecoration":"none","color":"black"}} to="/products">
                    <MenuItem>Products</MenuItem>
                    </Link>

                    <Link style={{"textDecoration":"none","color":"black"}} to="/register">
                    <MenuItem>Register</MenuItem>
                    </Link>

                    <Link style={{"textDecoration":"none","color":"black"}} to="/login">
                    <MenuItem>Sign-in</MenuItem>
                    </Link>
                    <Link style={{"textDecoration":"none","color":"black"}}  to="/cart" >
                    <MenuItem>
                    <Badge badgeContent={cartQuantity} color="primary">
                    <ShoppingCartOutlined/>
                    </Badge>
                    </MenuItem>
                    </Link>
          </Right>
          </Wrapper>
          </Container>
          )
}

export default Navbar
