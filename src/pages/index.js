import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"
import Education from "../components/education"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  background-color: #FF44A5;
  
`
const Container = styled.div`
  display:grid;
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

@media (max-width: 768px) {
  font-size: 2rem;
}
`

const IndexPage = () => (
  <Layout>
  <Wrapper>
    <Container>
    <SEO title="Home" />
    <Title>neal gardner is a creative professional with experience building digital and physical products.</Title>
    <Link to="/contact/">Go to contact</Link>
    </Container>
    <Experience/>
    <Education/>
    </Wrapper>
    </Layout>
)

export default IndexPage
