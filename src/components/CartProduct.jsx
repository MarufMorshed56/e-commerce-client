import React,{useState,useEffect,} from 'react'

import { Add, Remove, DeleteForeverOutlined } from "@material-ui/icons";
import styled from "styled-components";
import { Mobile } from '../Responsive';


import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';


//Redux
import  {useSelector } from 'react-redux';
import {useDispatch} from 'react-redux'
import {deleteProduct,updateProduct,clearCart,updatePrice} from "../redux/cartRedux"
// import cartSlice from '../redux/cartRedux'; 
// import { useImmerReducer } from "use-immer";



//Stripe payment-checkout
import StripeCheckout from "react-stripe-checkout"
import { userRequest } from './axiosReqMethods';



// const KEY = process.env.REACT_APP_STRIPE_PUBLIC_KEY;
const KEY = 'pk_test_51K33SXA5XU2A58SjUokVvL5XDKah2GEl3ivQ50Ky4mazkITEDrxj3YxCH65yyWRkCAMiIgYPPPHpSPR1lltwWAQh00sOdkNL6A' 
// this Value has to be inside .env.. as it was not working,I directly entered teh value here




const Container = styled.div``;

const Wrapper = styled.div`
          padding: 20px;
          ${Mobile({padding:"10px"})}
          `;

const Title = styled.h1`
          font-weight: 300;
          text-align: center;
          `;

const Top = styled.div`
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 20px;
          `;

const TopButton = styled.button`
          padding: 10px;
          font-weight: 600;
          cursor: pointer;
          border: ${(props) => props.type === "filled" && "none"};
          background-color: ${(props) =>
          props.type === "filled" ? "black" : "transparent"};
          color: ${(props) => props.type === "filled" && "white"};
          `;

const TopTexts = styled.div`
          ${Mobile({display:"none"})}
          `;
const TopText = styled.span`
          text-decoration: underline;
          cursor: pointer;
          margin: 0px 10px;
          `;

const Bottom = styled.div`
          display: flex;
          justify-content: space-between;
          ${Mobile({flexDirection:"column"})}
          `;

const Info = styled.div`
          flex: 3;
          `;

const Product = styled.div`
          /* height:250px; */
          display: flex;
          padding:20px 0px;
          justify-content: space-between;
          ${Mobile({flexDirection:"column"})}
          `;

const ProductDetail = styled.div`
          flex: 2;
          display: flex;
          `;

const Image = styled.img`
          width: 180px;
          height:80%;
          ${Mobile({height:"200px"})}
          `;

const Details = styled.div`
          padding: 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          `;

const ProductName = styled.span`
          width:200px;
          word-wrap:break-word;
          ${Mobile({width:"150px"})}`;

const ProductId = styled.span`
          width:120px;
          word-wrap:break-word;
`

const ProductColor = styled.div`
          width: 20px;
          height: 20px;
          border-radius: 50%;
          background-color: ${(props) => props.color};
          `;

const ProductSize = styled.span``;

const PriceDetail = styled.div`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          ${Mobile({paddingTop:"15px"})}
          `;

const ProductAmountContainer = styled.div`
          display: flex;
          align-items: center;
          margin-bottom: 20px;
          `;

const ProductAmount = styled.div`
          font-size: 24px;
          margin: 5px;
          ${Mobile({margin:"5px 25px"})}
          `;

const ProductPrice = styled.div`
          font-size: 30px;
          font-weight: 200;
          ${Mobile({marginBottom:"15px"})}
          `;

const Hr = styled.div`
          background-color: #eee;
          border: none;
          height: 1px;
          `;

const Summary = styled.div`
          flex: 1;
          border: 0.5px solid lightgray;
          border-radius: 10px;
          padding: 20px;
          height: 50vh;
          `;

const SummaryTitle = styled.h1`
          font-weight: 200;
          `;

const SummaryItem = styled.div`
          margin: 30px 0px;
          display: flex;
          justify-content: space-between;
          font-weight: ${(props) => props.type === "total" && "500"};
          font-size: ${(props) => props.type === "total" && "24px"};
          `;

const SummaryItemText = styled.span``;

const SummaryItemPrice = styled.span``;

const Button = styled.button`
          width: 100%;
          padding: 10px;
          background-color: black;
          color: white;
          font-weight: 600;
          `;





const CartProduct = () => {

          const dispatch = useDispatch()
          const cart = useSelector(state=>state.cart)
          var total = useSelector(state=>state.cart.total)

          const user = useSelector(state=>state.user.currentUser)
          const [newTotal, setTotal] = useState(total)
          
useEffect(()=>{
          // const  value  = useSelector(state=>state.cart.total)
          setTotal(total)
},[cart.products])
          // const total = useSelector(state=>state.cart.total)
          const products = cart.products

          // const copyProduct = JSON.parse(JSON.stringify(products))
          // console.log("copy",copyProduct)

          // copyProduct.map((item)=>{
          //           console.log("quantity",item.quantity)
          // })
          const [stripeToken,setStripeToken]= useState(null)

          const onToken =(token)=>{
                    setStripeToken(token)
                    // console.log(token)
          }
          // const [increaseQuantity,setIncreaseQuantity] = useState(0)
          // const [decreaseQuantity,setDecreaseQuantity] = useState(0)

          //const [state, dis] = useImmerReducer(cartSlice, initialState);



//           const handleQuantity=(value, itemId)=>{   
//                     if(value==="decrease"){
                    // copyProduct.map((item)=>{
                    //           if(item.unique === itemId){
                    //                     // const quantity = item.quantity - 1;
                    //                     item.quantity = quantity ;
                    //           } 
                              // console.log("upquantity",copyProduct.quantity)
                    // dispatch(updateProduct(copyProduct))
                              //console.log("newProduct",products)                           
                    // })
                    // }else if(value==="increase"){
//                     }   
//                     console.log("clicked")      
//           }

          const HandleDelete =(itemId)=>{
                    const newProduct = products.filter((product)=> product.unique != itemId)
                              dispatch(deleteProduct(newProduct))
                              total =0;
                    newProduct.map((item)=>{
                              total = 0;
                              total += (item.price * item.quantity)
                    })
                              dispatch(updatePrice(total))
          }

          const handleClearCart =()=>{
                    dispatch(clearCart())
                    console.log("clearing")
          }
          const handleCheckOut =()=>{
                   history.push('/login')  
          }


const history = useHistory();
useEffect(()=>{
          const makeRequest = async()=>{
                    try {
                              const res = await userRequest.post("/checkout/payment", {tokenId:stripeToken.id, amount:total*100,
                              })
                              history.push("/success", {stripeData: res.data,
                              products: cart, });
                              // after completion userRequest.post, "histoty.push" will take us to url:"/success" which is "success page", & will sent "stripeData" & "product" data to that page from here
                    } catch (error) {
                              console.log(error)    
                    }
          }
          (stripeToken && total>=1) && makeRequest();
},[stripeToken,total,history])

return (  
          <Container>
          <Wrapper>
          <Title>YOUR BAG</Title>
          <Top>
                    <Link  style={{"textDecoration":"none", "color":"white"}} to ="/products">
                    <TopButton> 
                                        CONTINUE SHOPPING
                    </TopButton>
                    </Link>
                    <TopTexts>
                    <TopText>Shopping Bag</TopText>
                    <TopText>Your Wishlist (0)</TopText>
                    </TopTexts>
                    <TopButton type="filled" onClick={()=>handleClearCart()}>CLEAR CART</TopButton>
          </Top>
          <Bottom>
          <Info>
{cart.products.map((item)=>(
                    <div>
                    <Product>
                    <ProductDetail>
                              <Image src={item.img} />
                    <Details>
                              <ProductName>
                                        <b>Product:</b> {item.title}
                              </ProductName>
                              <ProductId>
                                        <b>ID:</b> {item._id}
                              </ProductId>
                              <b>Color :</b>
                              <ProductColor color={item.chooseColor} />
                              <ProductSize>
                                        <b>Size:</b> {item.chooseSize}
                              </ProductSize>
                    </Details>
                    </ProductDetail>
          
                    <PriceDetail>
                              <ProductAmountContainer>
                              <DeleteForeverOutlined  style={{"color":"red","height":"40px","width":"40px"}} onClick={()=>HandleDelete(item.unique)} />
                              </ProductAmountContainer>
                              <ProductAmountContainer>            
                              {/* <Remove onClick={()=>handleQuantity("decrease",item.unique)} /> */}
                              <ProductAmount>quantity : {item.quantity}</ProductAmount>
                              {/* <Add  onClick={()=>handleQuantity("increase",item.unique)}/> */}
                              </ProductAmountContainer>
                              <ProductPrice>${item.totalPrice}</ProductPrice>
                    </PriceDetail>
                    </Product>
                    <Hr />
                    </div>
          ))
}
          </Info>

          <Summary>
                    <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                    <SummaryItem>
                    <SummaryItemText>Subtotal</SummaryItemText>
                    <SummaryItemPrice>${newTotal}</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryItemText>Estimated Shipping</SummaryItemText>
                    <SummaryItemPrice>$ 5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem>
                    <SummaryItemText>Shipping Discount</SummaryItemText>
                    <SummaryItemPrice>$ -5.90</SummaryItemPrice>
                    </SummaryItem>
                    <SummaryItem type="total">
                    <SummaryItemText>Total</SummaryItemText>
                    <SummaryItemPrice>${newTotal}</SummaryItemPrice>
                    </SummaryItem>

                    {!user ? <Button onClick={()=>handleCheckOut()}>LOG IN TO CHECKOUT</Button>:
                    <StripeCheckout name="MAHA SHOP"
                    billingAddress //this is inclueded in the api
                    shippingAddress//this is inclueded in the api
                    description={`Your total is $${total}`}
                    amount={total*100}// as stripe counts amount in  penny instead of dollar & as 100 penny = 1 dollar, so  "total" needs to be multiplied by 100 
                    token={onToken}
                    stripeKey={KEY}
                    >
                    <Button>CHECKOUT NOW</Button>
                    </StripeCheckout>}
          </Summary>


          </Bottom>
          </Wrapper>
          </Container>
          )
}

export default CartProduct
