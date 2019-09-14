import { Link } from "gatsby"
import React from "react"
import Image from "../components/image"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  background-color: #FF44A5;
`

const Nav = styled.nav`
  display:grid;
  max-width: 1100px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  padding: 1.5rem 3rem;
  align-items: center;
  margin: 0 auto;
`

const Left = styled.div`
justify-start: end;
max-width: 64px;

`

const LogoLink = styled(props => <Link {...props} />)`
`

const Right = styled.div`
  justify-self: end;
`

const HeaderLink = styled(props => <Link {...props} />)`
  color: #ffffff;
  text-decoration: none;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0;
  padding-bottom: 0;
  font-weight: 700;
  padding: 0rem 1rem;
  font-size: 0.8rem;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  &:hover {
    color: #FF0086;
  }

  &:last-child {
    padding-right: 0;
  }
`



const Header = () => (
  <Wrapper>
    <Nav>
      <Left>
        <LogoLink
          to="/">
          <Image/>
        </LogoLink>
        </Left>
        <Right>
          <HeaderLink to="/about">About</HeaderLink>
          <HeaderLink to="/contact">Contact</HeaderLink>
        </Right>
    </Nav>
  </Wrapper>
)

export default Header
