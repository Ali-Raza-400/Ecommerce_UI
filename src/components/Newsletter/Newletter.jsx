import React from 'react'
import styled from 'styled-components'
import SendIcon from '@mui/icons-material/Send';
import { mobile } from "../../responsive";
const Container = styled.div`
height: 60vh;
background-color: #fcf5f5;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
`
const Title = styled.h1`
font-size: 70px;
`
const Description = styled.div`
font-size: 24px;
font-weight: 300;
margin-bottom: 20px;
${mobile({ textAlign: "center" })}

`
const InputContainer = styled.div`
width:50%;
background-color: white;
height: 40px;
display: flex;
justify-content: space-between;
border: 1px solid lightgray;
${mobile({ width: "80%" })}

`
const Input = styled.input`
flex: 8;
border: none;
padding-left: 20px;
`
const Button = styled.button`
flex:1;
border: none;
background-color: teal;
color: white;
`



const Newletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely update from our favorite Product</Description>
        <InputContainer>
        <Input placeholder='Your email '/>
        <Button>
            <SendIcon/>
        </Button>
   
        </InputContainer>
    </Container>
  )
}

export default Newletter