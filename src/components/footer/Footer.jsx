import React from 'react'
import styled from 'styled-components'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import { mobile } from "../../responsive";


const Container = styled.div`
display: flex;
${mobile({ flexDirection: "column" })}
/* align-items: center; */
`

const Left = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  padding: 20px;
`;

const Logo = styled.h1``
const Desc = styled.p`
margin:20px 0px;
`
const SocialContainer = styled.div`
display: flex;
`
const SocialIcons = styled.div`
width: 40px;
height:40px;
border-radius: 50%;
color: white;
background-color: #${props => props.color};
display: flex;
justify-content: center;
align-items: center;
margin-right: 20px;
`
const Center = styled.div`
 flex: 1;
padding: 20px;
${mobile({ display: "none" })}
`
const Title = styled.h3`
  margin-bottom: 30px;
`;

const List = styled.ul`

margin: 0;
padding: 0;
list-style: none;
display: flex;
flex-wrap:wrap;
`
const ListItem = styled.li`
width:50%;
margin-bottom: 10px;
`
const Right = styled.div`flex: 1;
padding: 20px;
${mobile({ backgroundColor: "#fff8f8" })}
`
const Payment = styled.img`
width: 50%;
`
const ContactItem = styled.div`
margin-bottom:20px;
display: flex;
align-items: center;
`

const Footer = () => {
  return (
    <Container>
      <Left>
        <Logo>AR.</Logo>
        <Desc>There are many variations of passages of Lorem Ipsum available, but
          the majority have suffered alteration in some form, by injected
          humour, or randomised words which don’t look even slightly believable.</Desc>
        <SocialContainer>
          <SocialIcons color="3B5999">
            <FacebookIcon />
          </SocialIcons>
          <SocialIcons color="E4405F">
            <InstagramIcon />
          </SocialIcons>
          <SocialIcons color="55ACEE">
            <TwitterIcon />
          </SocialIcons>
          <SocialIcons color="3B5999">
            <LinkedInIcon />
          </SocialIcons>
        </SocialContainer>
      </Left>
      <Center>
        <Title>Useful Links</Title>
        <List>
          <ListItem>Home</ListItem>
          <ListItem>Cart</ListItem>
          <ListItem>Man Fashion</ListItem>
          <ListItem>Woman Fashion</ListItem>
          <ListItem>Accessories</ListItem>
          <ListItem>My Account</ListItem>
          <ListItem>Order Tracking</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Wishlist</ListItem>
          <ListItem>Terms</ListItem>
        </List>
      </Center>
      <Right>

        <Title>Contact</Title>
        <ContactItem><LocationOnIcon style={{ marginRight: "10px" }} /> city abc Pakistan</ContactItem>
        <ContactItem><PhoneIcon style={{ marginRight: "10px" }} /> +92123456789</ContactItem>
        <ContactItem><EmailOutlinedIcon style={{ marginRight: "10px" }} /> contact@AR.dev</ContactItem>
        <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />

      </Right>
    </Container>
  )
}

export default Footer