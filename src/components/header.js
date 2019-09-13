import { Link } from "gatsby"
import PropTypes from "prop-types"
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
  grid-template-columns: 1fr;
  justify-content: start;
  grid-template-rows: auto;
  padding: 1.5rem 3rem;
`

const Header = ({ siteTitle }) => (
  <Wrapper>
    <Nav>
        <Link
          to="/" style={{maxWidth: 64}}>
          <Image/>
        </Link>
    </Nav>
  </Wrapper>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
