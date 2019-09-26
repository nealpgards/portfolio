import React from "react"
import styled from '@emotion/styled'
import { Tween } from 'react-gsap';

const Container = styled.div`
  display:grid;
  max-width: 960px;
  padding: 1.5rem 3rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  height: auto;
  margin: 0 auto;
`


const TitleContainer = styled.div`
  padding-top: 2rem;  

  h1 {
    color: #191919;
    font-size: 2.1rem;
    padding: 1rem 0 0 0;
    margin: 0;
    font-family: kiro, sans-serif;
    font-weight: 700;
    font-style: italic;
    line-height: 140%;
    transition: .4s all ease-in-out;

    @media (max-width: 768px) {
      font-size: 1.5rem;
    }
  }

  @media (max-width: 768px) {
    padding-top: 1rem;
  }

  

`

const Hero = () => (
    <Container>
      {/* <Tween from={{ y: '50px', opacity: 0}} to={{ y: '0px', color: '#191919', opacity: 1 }} delay="0.3" duration="0.4"> */}
      <TitleContainer>
        <h1>Hi, I'm Neal <span style={{fontStyle: `normal`}}>✌🏼</span></h1>
        <h1>I’m a creative professional with over six years of startup experience designing and launching products.</h1>
        <h1>I’m passionate about UX design, consumer products, and building brands.</h1>
      </TitleContainer>
      {/* </Tween> */}
    </Container>
)

export default Hero
