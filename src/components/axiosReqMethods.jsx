import axios from 'axios'
import {useSelector } from 'react-redux'
const BaseUrl = "http://localhost:5000/api/v1"


const Token =()=>{
          return( useSelector(state=>state.user.token))
}
//const Token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYTlmNzcxZTY5OWEzNzhkNzZmODBhOCIsImlzQWRtaW4iOnRydWUsImlhdCI6MTYzODg3MTgyNSwiZXhwIjoxNjM5MTMxMDI1fQ.k6V9qoLmyS5ZG_f65R2KSteu79JABDXn_xu2l14gTRg"

export const publicRequest =  axios.create({baseURL:BaseUrl}) //creating an Axios Instance

export const userRequest =  axios.create({
          baseURL:BaseUrl,
          header:{
                    token:`Bearer ${Token}`
          }
})