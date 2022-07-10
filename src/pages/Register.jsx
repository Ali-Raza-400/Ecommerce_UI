import React from 'react'
import styled from 'styled-components'
import { mobile } from "../responsive";
const Container = styled.div`
    width:100vw;
    height:100vh;
    background:linear-gradient(rgba(255,255,255,0.5),rgba(255,255,255,0.5)) ,url("https://images.pexels.com/photos/6984661/pexels-photo-6984661.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center ;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
    `
const Wrapper = styled.div`
    width: 40%;
    padding: 20px;
    background-color: white;
    border-radius: 5px;
    opacity: 0.8;
    ${mobile({ width: "75%" })}
    `
const Title = styled.h1`
    font-size: 24px;
    font-weight: 300;
    color: teal;
    text-align: center;

    `
const Form = styled.form`
    display : flex;
    flex-wrap:wrap;
    `
const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 20px 10px 0px 0px;
    padding: 15px 20px;
    outline:none;
    border: 1px solid rgba(0,0,0,0.2);
    border-radius: 5px;
    color: rgba(0,0,0,0.6);
    letter-spacing: 1.5px;
    font-weight: 500;
    font-size: 16.5px;


    `
const Agreement = styled.span`
    font-size: 14px;
    margin: 20px 0px;
    color: rgba(0,0,0,0.6);
    text-align: center;
    `
const Button = styled.button`
    width: 40%;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: white;
    cursor: pointer;
    margin: auto;
    `

const Register = () => {
    return (
        <Container>
            <Wrapper>
                <Title>Create An Account</Title>
                <Form>
                    <Input placeholder="Name" />
                    <Input placeholder="Last Name" />
                    <Input placeholder="Username" />
                    <Input placeholder="Email" />
                    <Input placeholder="Password" />
                    <Input placeholder="Conform Password" />
                    <Agreement>By creating an account, I consent to the processing of my personal data in accordance with the <b>PRIVACY POLICY</b></Agreement>
                    <Button>Create</Button>
                </Form>
            </Wrapper>
        </Container>
    )
}

export default Register