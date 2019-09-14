import React from "react"
// import { Link } from "gatsby"
import "../components/main.css"
import styled from '@emotion/styled'
// import { Controller, Scene } from 'react-scrollmagic';
import { Tween } from 'react-gsap';

const Container = styled.div`
  display:grid;
  max-width: 1100px;
  padding: 1.5rem 3rem;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  align-items: center;
  height: calc(100vh - 83.56px);
  margin: 0 auto;
`
const Title = styled.h1`
  color: white;
  font-weight: 400;
  font-size: 2.8rem;
  opacity: 0.9;
  font-family: buena-park-jf, serif;
  max-width: 1100px;
  line-height: 140%;
  transition: .4s all ease-in-out;

@media (max-width: 768px) {
  font-size: 2rem;
}
`

// const AboutLink = styled(props => <Link {...props} />)`
//   color: #ffffff;
//   text-decoration: none;
//   font-family: buena-park-jf, serif;
//   font-size: 1.5rem;

//   &::hover {
//     color: #FF0086;
//   }
// `

const Hero = () => (
    <Container>
      <Tween from={{ y: '100px', opacity: 0, delay: 0.2 }} to={{ y: '0px', color: 'white', opacity: 0.9 }} duration="0.7">
        <Title>neal gardner is a creative professional with experience building digital and physical products.</Title>
      </Tween>
      {/* <Controller>
      <Scene duration={100} pin>
          <AboutLink to="/about">About me</AboutLink>
      </Scene>
    </Controller> */}
    </Container>
)

export default Hero
