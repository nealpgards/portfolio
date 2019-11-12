import React from "react"
import { Link } from "gatsby"
import styled from '@emotion/styled'
import { Tween } from 'react-gsap';
import nealprofile from "../images/nealprofile.png"

const Container = styled.div`
  height: 90vh;
  max-width: 1600px;
  margin: 0 auto;

  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: repeat(6,1fr);
  grid-template-areas: 
    "left left profile"
    "left left profile"
    "left left profile"
    "left left profile"
    "left left subtext"
    "left left subtext";

    @media (max-width: 1000px) {
      min-height: 100vh;
      grid-template-columns: repeat(2,1fr);
      grid-template-rows: repeat(6,1fr);
      grid-template-areas: 
        "left profile"
        "left profile"
        "left profile"
        "left profile"
        "left subtext"
        "left subtext";
  }

    @media (max-width: 650px) {
      min-height: 100vh;
      grid-template-columns: 1fr;
      grid-template-rows: auto;
      grid-template-areas: 
        "left"
        "profile"
        "subtext";
    }
`


const Left = styled.div`
  grid-area: left;
  display: grid;
  justify-items: center;
  align-items: center;
  background-color: #000000;
  padding: 12vmin 3rem;
  color: #ffffff;
  }

  h1 {
    margin-bottom: 1rem;
    line-height: 140%;
    font-weight: bold;
  }

  h2 {
    line-height: 140%;
    font-weight: 500;
  }

  @media (max-width: 768px) {
      height: auto;
      max-width: 100vw;
  }
`

const Profile = styled(props => <Link {...props} />)`
  grid-area: profile;
  display: flex;
  justify-content: center;
  align-items: center;
  background:url(${nealprofile}); 
  background-size: cover;
  background-position: top;
  position: relative;
  z-index: 1;


  &::before {
    display: block;
    content:'About Me';
    position:absolute;
    width: auto;
    padding: 5px 4px;
    margin-bottom: 25px;
    margin-left: 25px;
    bottom: 0;
    font-size: 1rem;
    color: #000000;
    font-weight: bold;
    text-transform: uppercase;
    left:0;
    background-color: transparent;
    height: auto;
    border: 3px solid #000000;
    text-align: center;
    z-index: 3;
    transition: 0.4s all ease-in-out;


  }

  &:hover::before {
    background-color: #FFFFFF;
  }

  @media (max-width: 650px) {
    height: 100vw;
    max-width: 100vw;
}
`

const Subtext = styled.div`
  grid-area: subtext;
  background-color: #00FF43;
  padding: 1.5rem 3rem;
  display: grid;
  justify-items: center;
  align-items: center;

  h4 {
    margin-bottom: 1rem;
    line-height: 140%;
    text-transform: uppercase;
    font-weight: bold;
    letter-spacing: 0.5px;
  }

  h2 {
    line-height: 120%;
    font-weight: 500;
  }

  @media (max-width: 768px) {
    height: auto;
    max-width: 100vw;
    padding: 12vmin 3rem;
}
`



const Hero = () => (
    <Container>
      <Left>
        <div style={{maxWidth: `500px`}}>
          <h1>Hi, I'm Neal Gardner</h1>
          <h2>I’m a creative professional with over six years of startup experience designing and launching products.</h2>
        </div>
      </Left>
      <Profile to="/contact"/>
      <Subtext>
        <div>
          <h4>What I'm Best At</h4>
          <h2>startups. product. design. ux. strategy.</h2>
        </div>
      </Subtext>
    </Container>
)

export default Hero
