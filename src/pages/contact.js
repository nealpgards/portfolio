import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  background-color: #FF44A5;
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

const ContactPage = () => (
    <Layout>
    <SEO title="Contact" />
    <Wrapper>
        <Container>This is contact container. it contains things</Container>
      </Wrapper>
      </Layout>
  )
  
  export default ContactPage
  