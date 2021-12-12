import React from 'react'
import styled from "styled-components";

import { Link } from 'react-router-dom';
const Container = styled.div`
          width: 100vw;
          height: 100vh;
          background:url('https://cdn.pixabay.com/photo/2016/05/25/20/17/icon-1415760_960_720.png') center;
          background-size: cover;
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          //z-index: 1;
`
const GlassBack = styled.div`
          opacity:0.6;
          background-color:white;
          height:88vh;
          border-radius: 15px;
          width: 370px;
          position: absolute;
          z-index: 2;
`

const Wrapper = styled.div`
          width: 300px;
          padding: 40px;
          position: absolute;
          z-index: 3;
`;

const Title = styled.h1`
          padding-left: 20px;
          font-size: 24px;
          font-weight: 800;
`;

const Form = styled.form`
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: center;
`;

const Input = styled.input`
          flex: 1;
          min-width: 40%;
          margin: 20px 10px 0px 0px;
          padding: 10px;
          background: transparent;
          border: 2px solid;
          border-radius: 10px;
          font-weight: 1000;
`;

const Agreement = styled.span`
          font-size: 12px;
          margin: 20px 0px;
`;

const Button = styled.button`
          width: 40%;
          border: none;
          padding: 15px 20px;
          background-color: teal;
          color: white;
          cursor: pointer;
          border-radius: 10px;
`;

const SecondButtons =styled.div`
          display:flex;
          width: 100%;  
          align-items: center;
          justify-content: space-between;
          margin-top: 30px;
          /* margin-bottom: 20px; */
          
`
const ButtonTwo = styled.button` 
          width:150px;
          height:45px;
          border: none;
          padding: 5px 20px;
          margin-left:10px ;
          background-color:teal;
          color:black;
          cursor: pointer;
          border-radius: 10px;

`;

const Register = () => {
          return (
                    <Container>
                    <GlassBack/>
                    <Wrapper>
                    <Title>CREATE AN ACCOUNT</Title>
                    <Form>
                              <Input placeholder="name" />
                              <Input placeholder="last name" />
                              <Input placeholder="username" />
                              <Input placeholder="email" />
                              <Input placeholder="password" />
                              <Input placeholder="confirm password" />
                              <Agreement>
                              By creating an account, I consent to the processing of my personal
                              data in accordance with the <b>PRIVACY POLICY</b>
                              </Agreement>
                              <Button>CREATE</Button>
                    </Form>
                    <SecondButtons>
                    <ButtonTwo>
                    <Link style={{"textDecoration":"none","color":"white"}} to ="/">
                    Go to Home</Link>
                    </ButtonTwo>
                    <ButtonTwo>
                    <Link  style={{"textDecoration":"none", "color":"white"}} to ="/products">Go to Products
                    </Link>
                    </ButtonTwo>

                    </SecondButtons>
                    </Wrapper>
                    </Container>
          )
}

export default Register
