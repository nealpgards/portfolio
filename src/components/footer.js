import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'

const Wrapper = styled.footer`
  width: 100%;
  background-color: #FFFFFF;
`
const Container = styled.div`
  display:grid;
  max-width: 1100px;
  padding: 1.5rem 3rem;
  grid-template-columns: 1fr;
  grid-template-rows: auto;
  margin: 0 auto;
  justify-items: center;

  p {
    color: #191919;
text-decoration: none;
  letter-spacing: 0.5px;
  margin-bottom: 0;
  padding-bottom: 0;
  font-weight: 400;
  padding: 0rem 1rem;
  padding-top: 8rem;
  font-size: 0.8rem;
font-family: "stratos", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;

  }
`




const Footer = ({ siteTitle }) => (
  <Wrapper><Container>
    <p>&copy; Neal P Gardner 2019</p>
    </Container></Wrapper>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  siteTitle: ``,
}

export default Footer
