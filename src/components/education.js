import PropTypes from "prop-types"
import React from "react"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
`

const Container = styled.div`
  display:grid;
  max-width: 960px;
  grid-column-gap: 6rem;
  padding: 8rem 3rem;
  grid-template-columns: auto 1fr;
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
  font-size: 2rem;
  opacity: 0.9;
font-family: buena-park-jf, serif;
max-width: 1100px;


@media (max-width: 768px) {
  font-size: 2rem;
}
`

const EducationSection = styled.div`
`

const SingleEducation = styled.div`
    padding-bottom: 2rem;

    h4, h6, p {
        margin-bottom: .75rem;
    }




`



const Education = ({ siteTitle }) => (
  <Wrapper>
    <Container>
       <Title>Education</Title>
       <EducationSection>
           <SingleEducation>
                <h4>University of Colorado at Boulder, Leeds School of Business</h4>
                <h6>this is my company</h6>
                <p>This is the description of what i did at that company</p>
           </SingleEducation>
        
       </EducationSection>
    </Container>
  </Wrapper>
)

Education.propTypes = {
  siteTitle: PropTypes.string,
}

Education.defaultProps = {
  siteTitle: ``,
}

export default Education
