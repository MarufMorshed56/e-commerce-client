import { css } from "styled-components"

const Mobile = (props) =>{
          return css`
          @media only screen and (max-width:380px){
                              ${props}
          }
          `
}
const Tab= (props) =>{
          return css`
          @media only screen and ( max-width:800px){
                              ${props}
          }
          `
}
export{
          Mobile,
          Tab

}