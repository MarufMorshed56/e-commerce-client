        import { ArrowBackIos, ArrowForwardIos } from '@material-ui/icons'
        import React,{useState, useEffect} from 'react'
        import styled from 'styled-components'
        import {SliderItems} from '../Data'
        import {Mobile} from '../Responsive'
        //import photos from'../Assets/cover photos'

        const Container = styled.div`
                width:100%;
                height:100vh;
                //background:coral;
                position:relative;
                overflow:hidden;
                ${Mobile({height:"50vh"})}
        ` 
        const Arrow = styled.div`
                width:50px;
                height:50px;
                display:flex;
                align-items:center;
                justify-content:center;
                background-color:#fff7f7;
                border-radius:50%;
                position:absolute;
                top:0;
                bottom:0;
                margin:auto;
                left: ${props=> props.direction === "left" && "10px"};
                right: ${props=> props.direction === "right" && "10px"};
                cursor:pointer;
                opacity: 0.5;
                z-index:2;
                ${Mobile({display:"none",top:"0%",bottom:"50%"})}
        `
        const Wrapper = styled.div`
                height: 100%;
                display:flex;
                transition:all 1.5s ease;
                transform: translateX(${(props)=> props.slideIndex *-100}vw)
                // flex-direction:row;
        `
        const WrapperTwo = styled.div`
        //transform: translateX(${(props)=> props.slideIndex *-100}vw)
                // height: 100%;
                //display:flex;
                //flex-direction:row;
                
        `
                
        const Slide = styled.div`
                display : flex; 
                width: 100vw;
                height:100vh;
                align-items: center;
                //justify_content: center;
                ${Mobile({ display:"flex", flexDirection:"column", height:"60vh"})}

        `
        const ImgContainer = styled.div`
                height:100%;
                flex:1;
                width:45%;
                display:flex;
                flex-direction:column;
                padding-left: 60px;
                margin-right: 10px;
                //text-align: center;
                //justify-content: center;
                //align-items:center;
                // background: blue;
                ${Mobile({ height:"400px",width:"380px",paddingLeft:"0px",paddingRight:"0px",marginRight:"0px"})}
        `
        const Image = styled.img`
                height: 80%;  
                min-width:300px ;
                width: 80%; 
                ${Mobile({height:"400px", width:"380px" })}
        `
        const InfoContainer = styled.div`
                flex: 1;
                /* width: 50% ; */
                display:flex;
                flex-direction:column;
                padding-right: 70px;
                text-align: center;
                justify-content: center;
                align-items:center;
                margin-left:5px;
                ${Mobile({ height:"100px",paddingRight:"0px", marginTop:"-70%" })}

                /* background:blue; */
                
        `
        const Title =styled.h1`
                font-size: 65px;
                padding-left: 0px;
                ${Mobile({ margin:"5px",fontSize:"24px",LetterSpacing:"0px", color:"white",fontWeight:"1500"})}

        `
        const Description =styled.p`
                margin:50px 0px;
                font-size : 20px;
                font-weight:500;
                letter-spacing:3px;
                ${Mobile({ margin:"5px",fontSize:"14px",LetterSpacing:"0px",color:"white",fontWeight:"800"})}
        `
        const Button =styled.button`
                padding:10px;
                font-size:20px;
                background-color: transparent;
                cursor: pointer;
                border-radius: 15px;
                ${Mobile({ fontSize:"14px", padding:"8px",color:"white",backgroundColor:"teal"})}
        `

        const Slider = () => {

                const [slideIndex, setSlideIndex] = useState(0);
                let [i,setI] = useState(0)
                const handleClick=(value)=>{
                        if(value==='left'){
                                setSlideIndex(slideIndex>0?slideIndex-1:2)
                                setI(slideIndex)
                        }
                        else{
                                setSlideIndex(slideIndex<2?slideIndex+1:0)
                                setI(slideIndex)
                                }
                                console.log(slideIndex)
                }
                const autoUpdateIndex=()=>{
                        setSlideIndex(i)
                        console.log(i)
                        setTimeout(updateI,3000)
                }
                
                const updateI=()=>{
                        setI(i>=0 && i<2?i+1:0)
                }
                useEffect(()=>{
                        autoUpdateIndex()
                },[i])

                
                        
                return (
                        <Container>
                        <Wrapper  slideIndex={slideIndex} >        
                        {SliderItems.map((item)=>(
                                <WrapperTwo>  
                        <Slide bg={item.bg} key={item.id}>
                        <ImgContainer>
                        <Image src={item.img}/></ImgContainer>
                        <InfoContainer>
                                <Title>{item.title}</Title>
                                <Description>{item.desc}</Description>
                                <Button>Shop Now</Button>
                        </InfoContainer>
                                </Slide>
                                </WrapperTwo>
                        ))}
                        </Wrapper>
                        <Arrow direction="left" onClick={()=> handleClick('left')}>
                        <ArrowBackIos/>
                        </Arrow>
                        <Arrow direction="right" onClick={()=> handleClick('right')}>
                        <ArrowForwardIos/></Arrow>
                        </Container>
                )
        }


        export default Slider
