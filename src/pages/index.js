import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import Things from "../components/things"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.div`
  width: 100%;
  background-color: #FF44A5;
`

const IndexPage = () => (
  <Layout>
  <SEO title="Home" />
  <Wrapper>
    <Hero/>
    <Things/>
    </Wrapper>
    </Layout>
)

export default IndexPage
