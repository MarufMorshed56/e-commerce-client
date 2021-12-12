import styled, { keyframes } from 'styled-components' 

import {Mobile} from '../Responsive'

const Container = styled.div`
          height: 30px;
          Background-color: teal;
          display:flex;
          align-items: center;
          justify-content:center;
          position:relative;
          // overflow:hidden;
          `
const Line = styled.p`
          font-size: 14px;
          ${Mobile({fontSize:"12px"})}
`

const GoAroundAnimation = keyframes`
          0%{
                    transform: translate(0%)
          }
          
          50%{
                    transform: translate(-240%)
          }
          50.01%{
                    transform: translate(230%)
          }
          100%{
                    transform: translate(0%)
          }
          
`

const HeadingTwo = styled.h2`
          position: absolute;
          color: white;
          font-size: 14px;
          font-weight: 500;
          // white-space: no-wrap;
          animation-name: ${GoAroundAnimation};
          animation-duration: 20s;
          animation-timing-function:linear; 
          animation-iteration-count:infinite;
          ${Mobile({animationDuration: "0s"})}
`


const Text =()=>{
          return <Line>Super deal coming this Sunday... 50% off on selected Products...
                    </Line>}

export const Announcement = () => {
          return (
                    <Container>
                              <HeadingTwo><Text/>
                              </HeadingTwo>    
                    </Container>
          )
}
