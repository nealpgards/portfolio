import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import "../components/main.css"
import styled from '@emotion/styled'
import Experience from "../components/experience"
import Education from "../components/education"
import Skills from "../components/skills"



const Wrapper = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
  <Wrapper>
    <Hero/>
    <Experience/>
    <Education/>
    <Skills/>
    </Wrapper>
    </Layout>
)

export default IndexPage
