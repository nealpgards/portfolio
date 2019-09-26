import React from "react"
import SEO from "../components/seo"
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  background-color: #FFFFFF;
  height: calc(100vh - 83.08px);
`

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

const NotFoundPage = () => (
    <>
    <SEO title="Contact" />
    <Wrapper>
        <Container>You must have found this page by accident, please click the logo above to head back home</Container>
      </Wrapper>
      </>
  )
  
  export default NotFoundPage
  