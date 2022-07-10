import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/Announcement/Announcement'
import Navbar from '../components/Navbar/Navbar'
import Newletter from '../components/Newsletter/Newletter'
import Products from '../components/Product/Products'
import Footer from '../components/footer/Footer'
import { mobile } from "../responsive";
import { useLocation } from 'react-router-dom'
import { useState } from 'react'

const Container = styled.div``
const Title = styled.h1`
margin: 20px;`
const FilterContainer = styled.div`
display: flex;
justify-content: space-between;

`
const Filter = styled.div`
margin:20px;
${mobile({ width: "0px 20px", display: "flex", flexDirection: "column" })}`

const FilterText = styled.span`
    font-size: 20px;
    font-weight: 600;
    margin-right: 20px;
    ${mobile({ marginRight: "0px" })}
`
const Select =styled.select`
padding: 10px;
margin-right: 20px;
${mobile({ margin: "10px 0px" })}

`
const Option = styled.option``

const ProductList = () => {
    const location =useLocation();
const cat= location.pathname.split("/")[2];
const [filters,setFilter] =useState({}); //for color and size of cloth
const [sort,setSort] =useState("newest"); //for old/new of cloth

const handleFilter=(e)=>{
const value = e.target.value;
setFilter({
    ...filters,
    [e.target.name]:value,
})
}


  return (
    <Container>
        <Navbar/>
        <Announcement/>
        <Title>
            {cat}
        </Title>
        <FilterContainer>
            <Filter>
                <FilterText>Filter Product</FilterText>
                <Select name="color"  onChange={handleFilter}>
                    <Option disabled >Color</Option>
                    <Option >white</Option>
                    <Option >black</Option>
                    <Option >red</Option>
                    <Option >blue</Option>
                    <Option >yellow</Option>
                    <Option >green</Option>
                </Select>
                <Select name="Size"  onChange={handleFilter}>
                    <Option disabled >Size</Option>
                    <Option >XL</Option>
                    <Option >S</Option>
                    <Option >M</Option>
                    <Option >L</Option>
                    <Option >XL</Option>
                    
                </Select>
            </Filter>
            <Filter>
            <FilterText>Sort Product</FilterText>
            <Select onChange={(e)=>setSort(e.target.value)}>
                <Option  value="newest">Newest</Option>
                <Option value="asc">Price (asc)</Option>
                <Option value="desc">Price (desc)</Option>
            </Select>
            </Filter>
        </FilterContainer>
        <Products cat={cat} filters={filters} sort={sort} />
        <Newletter/>
        <Footer/>
    </Container>
  )
}

export default ProductList