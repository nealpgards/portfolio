import React from "react"
import SEO from "../components/seo"
import Hero from "../components/hero"
import styled from '@emotion/styled'
import Experience from "../components/experience"
import Education from "../components/education"
import Skills from "../components/skills"


const Wrapper = styled.div`
  width: 100%;
  background-color: #FFFFFF;
`

const IndexPage = () => (
  <>
  <SEO title="Home" />
  <Wrapper>
    <Hero/>
    <Experience/>
    <Education/>
    <Skills/>
    </Wrapper>
    </>
)

export default IndexPage
