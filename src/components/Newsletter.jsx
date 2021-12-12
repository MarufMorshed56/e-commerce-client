import { SendOutlined } from '@material-ui/icons'
import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
          height:40vh;
          background-color:#fcf5f5 ;
          display:flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
`
const Title = styled.h1`
          font-size:50px;
          margin:20px;

`
const Description = styled.div`
          font-size:24px;
          font-weight:300;
          margin-bottom: 20px;
          text-align: center;

`
const InputContainer = styled.div`
          width:30%;
          min-width:250px;
          height:40px;
          background-color:white;
          display:flex;
          justify-content: space-between;
`
const Button = styled.button`
          background-color:teal;
          color:white;
          border:none;
          height:100%;
          cursor:pointer;
          border-radius:5px;
`
const Input = styled.input`
          width: 100%;
          border: 2px solid;
          border-radius: 5px;
          border-color: lightgrey;
          
`

const Newsletter = () => {
          return (
                    <Container>
                    <Title>Newsletter</Title>
                    <Description>Stay updated on your favorite products</Description>
                    <InputContainer>
                              <Input placeholder="your email"/>
                              <Button>
                              <SendOutlined />
                              </Button>
                    </InputContainer>
                    </Container>
          )
}

export default Newsletter
