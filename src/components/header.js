import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  background-color: #232323;
`

const Nav = styled.nav`
  display:grid;
  max-width: 1100px;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: auto;
  padding: 3vmin 1.5rem;
  align-items: center;
  margin: 0 auto;
  max-height: 10vh;

  @media (min-width: 768px) {
    padding: 3vmin 3rem;
  }
`

const Left = styled.div`
justify-self: start;
`

const Center = styled.div`
justify-self: center;

.neal {
  width: 130px;
}
`

const LogoLink = styled(props => <Link {...props} />)`
color: #ffffff;
text-decoration: none;
  margin-bottom: 0;
  padding-bottom: 0;
  font-weight: 600;
  text-transform: uppercase;
  text-align: center;
  font-size: 0.8rem;
  letter-spacing: 1.2px;
font-family: "stratos", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

`

const Right = styled.div`
  justify-self: end;
`

const HeaderLink = styled(props => <Link {...props} />)`
color: #ffffff;
text-decoration: none;
  margin-bottom: 0;
  padding-bottom: 0;
  font-weight: 400;
  padding: 0rem 1rem;
  font-size: 0.8rem;
  text-transform: lowercase;
font-family: "stratos", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
transition: 0.4s all ease-in-out;

  &:hover {
    color: #00FF43;
  }

  &:last-child {
    padding-right: 0;
  }
`



const Header = () => (
  <Wrapper>
    <Nav>
      <Left>
      <HeaderLink to="/contact">About</HeaderLink>
        </Left>
        <Center>
        <LogoLink
          to="/">
          <Image/>
        </LogoLink>
        </Center>
        <Right>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </Right>
    </Nav>
  </Wrapper>
)

export default Header
