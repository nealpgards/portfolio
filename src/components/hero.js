import React from "react"
import "../components/main.css"
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
const Title = styled.h1`
  color: #191919;
  font-size: 2.1rem;
  padding: 3rem 0 1rem 0;
  font-family: kiro, sans-serif;
  font-weight: 700;
  font-style: italic;
  line-height: 140%;
  transition: .4s all ease-in-out;
  opacity: 0;

@media (max-width: 768px) {
  font-size: 2rem;
}
`

const Hero = () => (
    <Container>
      <Tween from={{ y: '50px', opacity: 0}} to={{ y: '0px', color: '#191919', opacity: 1 }} delay="0.3" duration="0.4">
        <Title>Neal Gardner is a creative professional with experience building digital and physical products.</Title>
      </Tween>
    </Container>
)

export default Hero
