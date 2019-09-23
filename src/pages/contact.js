import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
  height: calc(100vh - 83.08px);
`

const Container = styled.div`
  display:grid;
  max-width: 960px;
  grid-column-gap: 2rem;
  padding: 8rem 3rem;
  grid-template-columns: 300px 1fr;
  grid-template-rows: auto;
  justify-items: stretch;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`
const Title = styled.h2`
  color: #191919;
  font-weight: 400;
  font-size: 1.5rem;
  font-family: "stratos", -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
  Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;


@media (max-width: 768px) {
  font-size: 1.2rem;
}
`

const RightSection = styled.div`
`

const ContactForm = styled.div`
    padding-bottom: 2.2rem;

    h4, h6, p {
        letter-spacing: 0.1px;
    }

    h4 {
      margin-bottom: .6rem;
        font-family: 'stratos', sans-serif;
        font-weight: 400;
        line-height: 140%;
        color: #191919;
        font-size: 16px;
    }

    h6, a {
      margin-bottom: .8rem;
        font-family: 'stratos', sans-serif;
        font-weight: 400;
        opacity: .5;
        font-size: 16px;
        line-height: 140%;
        color: #191919;
        text-decoration: none;
    }

    p {
      margin-bottom: .6rem;
      font-size: 16px;
      line-height: 140%;
        font-family: 'stratos', sans-serif;
        font-weight: 400;
        color: #191919;
    }




`

const ContactPage = () => (
    <Layout>
    <SEO title="Contact" />
    <Wrapper>
        <Container><Title>Contact</Title>
       <RightSection>
           <ContactForm>
                <h4>Email</h4>
                <a href="mailto:nealpgardner@gmail.com">nealpgardner@gmail.com</a>
           </ContactForm>
           <ContactForm>
                <h4>LinkedIn</h4>
                <a href="https://linkedin.com/in/nealpgardner">linkedin.com/in/nealpgardner</a>
                
           </ContactForm>
       </RightSection></Container>
      </Wrapper>
      </Layout>
  )
  
  export default ContactPage
  