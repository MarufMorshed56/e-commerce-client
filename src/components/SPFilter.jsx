//SPFilter === Single Product Filter
import React from 'react'
import { Add, Remove } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from '../Responsive';

import { useState, useEffect, useContext } from 'react'
import {urlIdContext} from '../pages/SingleProduct'

import { publicRequest } from './axiosReqMethods';
 //using useContext instead of prop-Drilling


//Redux
import {addProduct,clearCart} from '../redux/cartRedux';
import {useDispatch} from 'react-redux'

import nextId from "react-id-generator";


const Container = styled.div`
          height:80vh;
          width:100vw;
`;



const Wrapper = styled.div`
          padding: 50px;
          display: flex;
          justify-content: space-around;
          ${Mobile({padding:"10px",flexDirection:"column",justifyContent:"center", alignItems:"center"})}
`
const ImgContainer = styled.div`
          flex: 1;
          height:80vh;
          display:flex;
          justify-content: space-around;

`
const Image = styled.img`
          width: 350px;
          height:450px; 
          /* object-fit: cover; */
          ${Mobile({height:"40vh",width:"300px",ObjectFit:"cover"})}
`

const InfoContainer = styled.div`
          flex: 1;
          padding: 0px 50px;
          ${Mobile({padding:"10px"})}
`
const Title = styled.h1`
          font-weight: 200;
`

const Desc = styled.p`
          margin: 20px 0px;
          ${Mobile({margin:"10px 0px"})}
`

const Price = styled.span`
          font-weight: 100;
          font-size: 40px;
`

const FilterContainer = styled.div`
          width: 50%;
          margin: 30px 0px;
          display: flex;
          justify-content: space-between;
          ${Mobile({margin:"20px 5px"})}

`         
const Filter = styled.div`
          display: flex;
          align-items: center;
          margin:0px 10px;
          ${Mobile({margin:"0px 5px"})}
`

const FilterTitle = styled.span`
          font-size: 20px;
          font-weight: 200;
          padding-right:10px;
`

const FilterColor = styled.div`
          width: 25px;
          height: 25px;
          border-radius: 50%;
          border:3px solid;
          border-color:${(props)=> props.chooseColor===props.colour?"green":"white"};
          // only the color choosen by the user will get "teal" colored border & the rest of the color options will get "grey" colored borders
          border-color:${(props)=>props.colour==="white" && "black"}; 
          background-color: ${(props) => props.colour};
          margin: 0px 5px;
          cursor: pointer;
`

const FilterSize = styled.select`
          margin-left: 10px;
          padding: 5px;
`

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
          width: 50%;
          min-width:300px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          ${Mobile({padding:"0px 10px"})}

`

const AmountContainer = styled.div`
          display: flex;
          align-items: center;
          font-weight: 700;
`

const Amount = styled.span`
          width: 30px;
          height: 30px;
          border-radius: 10px;
          border: 1px solid teal;
          display: flex;
          align-items: center;
          justify-content: center;
          margin: 0px 5px;
`

const Button = styled.button`
          padding: 15px;
          border: 2px solid teal;
          background-color: white;
          cursor: pointer;
          font-weight: 500;
          &:hover{
          background-color:teal;
          color:white;
          }
`




const SPFilter = () => {
          const itemId = useContext(urlIdContext)

          const [product, setProduct] = useState([])
          // const array = ['white','white']
          const [color,setColor] = useState([])
          const [size,setSize] = useState([])

          const [unique, setUnique] = useState(nextId())
          const [quantity,setQuantity] = useState(1)
          const [chooseColor,setChooseColor] = useState("")
          const [chooseSize,setChooseSize] = useState("")

          
          const handleQuantity=(value)=>{
                    
                    if(value==="decrease" && quantity>1){
                              setQuantity(quantity-1)
                    }else if(value==="increase"){
                              setQuantity(quantity+1)
                    }
          }
          

useEffect(()=>{
                    const getProduct = async() => {
          try {
                    const res = await publicRequest.get("/products/find/"+itemId)  //here publicRequest is baseURL & .get is the end point & intotal it makes the total url req 
                    setProduct(res.data)
                    setColor(res.data.color)
                    // this is literally my stroke of Genius at it's Best....  see FilterColor section 
                    setSize(res.data.size)   
          } catch (error) {
                    console.log(error)                     
          }
          }
          getProduct(); 
},[itemId])
          
          console.log(chooseColor)



const updateSize=(e)=>{
          e.preventDefault()
          setChooseSize(e.target.value)
          console.log("size",chooseSize,"quantity",quantity)
          }



const dispatch = useDispatch()

const updateCart = () =>{
          const totalPrice = (product.price * quantity)
          // dispatch(clearCart())
          // console.log("cleared")
          const newUnique = nextId()
          setUnique(newUnique)
          // console.log("unique",unique)
          //setting a unique id each time a product(can be the same product) is added to the cart apart from the "product-id" so that even if there are multiple instances of the same product in the cart, we can delete it based on the "unique id" of " each time the "product gets to cart" 
          dispatch(addProduct({...product,quantity,chooseColor,chooseSize,totalPrice,unique}))
          console.log("added")   
}


          return (
                    <Container>
                    <Wrapper>
                    <ImgContainer>
                              <Image src={product.img}/>
                    </ImgContainer>
                    <InfoContainer>
                              <Title>{product.title}</Title>
                              <Desc>
                              {product.description}
                              </Desc>
                              <Price>${product.price}</Price>

                    <FilterContainer>
                    <Filter>
                    <FilterTitle>Color</FilterTitle>
                    {color.map((value)=>{
                    return <FilterColor colour={value} key={value} onClick={()=>setChooseColor(value)} chooseColor={chooseColor} />
                    } //Product's color is an array, so we  need to iterate over it...  thus we are using .map(), so we tried to use "product.color.map()" BUT BUT BUT there is a problem. as .map synchronous so by the time JS calls it the "product" hasn't still arrived/ got fetched. thus "product.color" remains undefined so ".map" can't itterate over "undefined" data so it throws an error,  So what we did is use another const/ useState called "color" which is defined as an empty 'array' so when ".map" is called it now CAN TRY to itterate over the empty array in contrast to previous "undefined" data..  &  as ".map" itterates, nothing gets rendered inside the component <FilterColor> UNTIL  data arrives/ gets fetched & "setColor" now sets  color = res.data.color, writting "setColor(res.data.color)" inside "useEffect" was Important, as written as anywhere /anything else results in error, for exmaple instead of writting "setColor(res.data.color)" we tried writting "setColor(products.color)" in the same line but it still results in color ="undefined" data as JS tries to access product before it even gets the data... Or writting "setColor(products.color)"  any where else results in either "too many attemted render error" or "undefined" data error, so this is the only solve we worked out.... Save this Info, because in future we will surely be needing it again......(like literally on the next line)..... Cheers !!! 
                    )} 
                    </Filter>
                    <Filter>
                              <FilterTitle>Size</FilterTitle>
                              <FilterSize>
                              {size.map((size)=>(
                              <FilterSizeOption key={size} onChange={updateSize}>{size}</FilterSizeOption>
                              ))
                              }
                              </FilterSize>
                    </Filter>
                    </FilterContainer>
                    <AddContainer>
                    <AmountContainer>
                              <Remove onClick={()=>handleQuantity("decrease")} />
                              <Amount>{quantity}</Amount>
                              <Add onClick={()=>handleQuantity("increase")} />
                              </AmountContainer>
                              <Button onClick={()=>updateCart()}>ADD TO CART</Button>
                    </AddContainer>
                    </InfoContainer>
                    </Wrapper>

                    </Container>
          )
}

export default SPFilter
