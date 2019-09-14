import PropTypes from "prop-types"
import React from "react"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  width: 100%;
  background-color: #FFFFFF;
`
const Container = styled.div`
  display:grid;
  max-width: 1100px;
  padding: 1.5rem 3rem;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: auto;
  margin: 0 auto;
  justify-items: center;
`

const Left = styled.div`
  justify-self: start;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0;
  padding-bottom: 0;
  color: #191919;
  font-weight: 700;
  font-size: 0.8rem;
font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

`

const Right = styled.div`
  justify-self: end;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 30px;
  margin-bottom: 0;
  padding-bottom: 0;
`


const Footer = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Left>
          Neal P Gardner      
      </Left>
      <Right>🦹🏻‍♂️</Right>
    </Container>
  </Wrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
