import React, { useState } from 'react'
import styled from 'styled-components'
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import Announcement from '../components/Announcement/Announcement'
import Navbar from '../components/Navbar/Navbar'
import Newsletter from '../components/Newsletter/Newletter'
import Footer from '../components/footer/Footer'

import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom';
import axios from 'axios';
import {publicRequest} from '../RequestMethod';
import { useEffect } from 'react';
const Container = styled.div``

const Wrapper = styled.div`
padding: 50px;
display: flex;
${mobile({ padding: "10px", flexDirection:"column" })}
`

const ImgContainer = styled.div`
flex: 1;
`

const Image = styled.img`
width: 100%;
height: 90vh;
object-fit: cover;
${mobile({ height: "40vh" })}
`

const InfoContainer = styled.div`

flex: 1;
padding: 0px 50px;
${mobile({ padding: "10px" })}
`

const Title = styled.h1`
font-weight: 200;
`

const Desc = styled.p`
margin: 20px 0px;
`

const Price = styled.span`
font-weight: 100;
font-size: 40px;
`
const FiltrContainer = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
${mobile({ width: "100%" })}

width: 50%;
`
const Filter = styled.div`
display: flex;
align-items: center;
`
const FilterColor = styled.div`
width: 20px;
height: 20px;
border-radius:50%;
background-color: ${(props) => props.color};
margin: 0px 5px;
cursor:pointer;
`
const FilterTitle = styled.span`
font-size: 20px;
font-weight: 200;


`
const FilterSize = styled.select`
margin-left: 10px;
padding: 5px;

`
const FilterSizeOption = styled.option``

const AddContainer = styled.div`
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
${mobile({ width: "100%" })}
`
const AmmountContainer = styled.div`
display:flex;
align-items: center;
font-weight: 700;
`
const Ammount = styled.span`
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
      background-color: #f8f4f4;
  }`




const Product = () => {
    const location =useLocation();
    const id= location.pathname.split("/")[2];
    const [product,setProduct]=useState({});

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res = await publicRequest.get("/products/find/" + id);
                setProduct(res.data);
            } catch {}
        };
        getProduct();
    }, [id]);
    // setting the quantity
    const[quantity,setQuantity]=useState(1);
      const handleQuantity=(type)=>{
        if(type=="dec"){
         quantity >1 &&  setQuantity(quantity-1)
        }
        else{
            setQuantity(quantity+1)
        }
      }

    // setting the color
    const[color,setColor]=useState("");
    const[size,setSize]=useState("");


   const handleClick =()=>{
    
   } 
    return (
        <Container>
            <Navbar />
            <Announcement />
            <Wrapper>

                <ImgContainer>
                    <Image src={product.img} />
                </ImgContainer>
                <InfoContainer>
                    <Title>{product.title}</Title>
                    <Desc>{product.desc}</Desc>
                    <Price>{product.price}</Price>
                    <FiltrContainer>
                        <Filter>
                            <FilterTitle>
                                Color
                            </FilterTitle>
                            {product.color?.map((c)=>(<FilterColor color={c} key={c} onClick={()=>setColor(c)}/>))}
                            
                            
                        </Filter>
                        <Filter>
                            <FilterTitle>
                                Size
                            </FilterTitle>
                            
                            <FilterSize onChange={(e)=>setSize(e.target.value)}>
                                {product.size?.map((s)=>(<FilterSizeOption  key={s} >{s}</FilterSizeOption>))}

                            </FilterSize>
                        </Filter>
                    </FiltrContainer>
                    <AddContainer>
                        <AmmountContainer>
                        <RemoveIcon onClick={()=>handleQuantity("dec")}/>
                        <Ammount>
                            {quantity}
                        </Ammount>
                        <AddIcon onClick={()=>handleQuantity("inc")}/>
                        </AmmountContainer>
                    <Button onClick={handleClick}>Add to Cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>
            <Newsletter />
            <Footer />

        </Container>
    )
}

export default Product