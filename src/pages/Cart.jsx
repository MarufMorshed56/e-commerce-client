import React from 'react'

import styled from "styled-components";
import { Announcement } from '../components/Announcement'
import CartProduct from '../components/CartProduct';
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";



const Container = styled.div``;
const Cart = () => {
          return (
                    <Container>

                    <Announcement/>
                    <Navbar/>
                    <CartProduct/>
                    <Footer/>
                              
                    </Container>
          )
}

export default Cart
