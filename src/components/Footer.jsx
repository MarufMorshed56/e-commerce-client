import { Instagram, Twitter,Facebook, LocalPhoneOutlined, AddLocationOutlined, EmailOutlined} from '@material-ui/icons';

import React from 'react'

import styled from 'styled-components'

import { Mobile } from '../Responsive';


const Container = styled.div`
`
const Container2 = styled.div`
          display:flex;
          ${Mobile({flexDirection:"column"})}

`
const Line = styled.div`
          width:100%;
          height:2px;
          background-color: teal;
`
const Left = styled.div`
          flex:1;
          padding:20px;
          ${Mobile({paddingDown:"10px"})}
`
const Middle = styled.div`
          flex:1;
          padding:20px;
          ${Mobile({display:"none"})}
`
const Right = styled.div`
          flex:1;
          padding:20px;
          ${Mobile({paddingTop:"0px"})}
`
const Logo = styled.h1`
          padding-left: 10px;

`
          
const Description =styled.p`
          margin:20px 0px;
          padding-left:10px ;
`

const SocialContainer =styled.div`
          display:flex;
          padding-left: 5px;
`
const Title =styled.h3`
margin-bottom:30px;
`

const List =styled.ul`
          margin:0;
          padding:0;
          list-style:none;
          display:flex;
          flex-wrap:wrap;
`
const ListItem =styled.li`
          width:50%;
          margin-bottom: 10px;
          cursor:pointer;
`

const SocialIcons =styled.div`
          padding:5px;
          /* padding-left:10px; */
          width: 50px;
          height:50px;
          cursor:pointer;
          color: #${props=> props.color};
          
`
const ContactItem =styled.div`
          margin-bottom: 20px;
          display:flex;
          align-items:center ;


`


const Footer = () => {
          return (
<Container>
          <Line/>
          <Container2>
          <Left>
                    <Logo>MAHA</Logo>
          <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsa, minus?
          </Description>
          <SocialContainer>
                    <SocialIcons>
                    <Facebook  style={{color:"#3B5999"}}/>
                    </SocialIcons>
                    <SocialIcons>
                    <Twitter  style={{color:"#55ACEE"}}/>
                    </SocialIcons>
                    <SocialIcons color="E4405F">
                     <Instagram /> {/* here we used props instead of inline CSS */}
                    </SocialIcons>                 
          </SocialContainer>

          </Left>          
          
          <Middle>
          <Title>Usefull Links</Title>
          <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Men's Fashion</ListItem>
                    <ListItem>Women's Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms & Condition</ListItem>
          </List>

          </Middle>
                    
          <Right>   
                    <Title>Contacts</Title>
                    <ContactItem><LocalPhoneOutlined style={{marginRight:'10px'}}/>+8801720184466 </ContactItem>
                    <ContactItem><AddLocationOutlined style={{marginRight:'10px'}}/>Sylhet,Bangladesh
                    </ContactItem>
                    <ContactItem><EmailOutlined style={{marginRight:'10px'}}/>maruf.morshed56@gmail.com
                    </ContactItem>
          </Right>
          </Container2>
</Container>
          )
}

export default Footer
