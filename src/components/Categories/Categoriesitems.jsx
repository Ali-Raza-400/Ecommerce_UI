import React from 'react'
import styled from 'styled-components'
import {Link} from 'react-router-dom'
import { mobile } from "../../responsive";

const Container = styled.div`
flex:1;
margin: 3px;
height: 70vh;
position: relative;
`
const Image = styled.img`
width: 100%;
height: 100%;
object-fit:cover;
${mobile({ height: "20vh" })}

`
const Info = styled.div`
position:absolute;
top: 0;
bottom: 0;
/* background-color:yellow; */
width: 100%;
height: 100%;
display: flex;
justify-content: center;
align-items: center;
flex-direction:column;
`
const Title = styled.h1`
color: white;
margin-bottom:20px;

`
const Button = styled.button`
border:none;
padding: 10px;
background-color: white;
color:gray;
cursor: pointer;
font-weight: 600;


`

const Categoriesitems = ({item}) => {

    return (
    <Container>
    <Link to={`/products/${item.cat}`}>
    <Image src={item.img}/>
     <Info>
         
         <Title>{item.title}</Title>
         <Button> Click me </Button>
    
    </Info>   
    </Link>
   
    </Container>
  )
}

export default Categoriesitems