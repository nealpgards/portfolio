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
`

const Left = styled.div`
  justify-self: start;
`

const Right = styled.div`
  justify-self: end;
`


const Footer = ({ siteTitle }) => (
  <Wrapper>
    <Container>
      <Left>
          left      
      </Left>
      <Right>Right</Right>
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
