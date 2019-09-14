import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Experience from "../components/experience"
import Education from "../components/education"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  background-color: #FF44A5;
`
let education = {
  title: `CU Boulder BUFFS BABY`,
  company: `Coloradoooo`,
  description: `This is a description for stuffffff`
}




const SecondPage = (props) => (
  <Layout>
  <SEO title="About" />
  <Wrapper>
    <Experience/>
    <Education {...education}/>
    </Wrapper>
    </Layout>
)

export default SecondPage
