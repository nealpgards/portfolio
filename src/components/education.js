import PropTypes from "prop-types"
import React from "react"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
`

const Container = styled.div`
  display:grid;
  max-width: 960px;
  grid-column-gap: 2rem;
  padding: 2rem 3rem;
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

const EducationSection = styled.div`
`

const SingleEducation = styled.div`
    padding-bottom: 2.2rem;

    h4, h6, p {
        letter-spacing: 0.1px;
    }

    h4 {
      margin-bottom: .6rem;
        font-family: 'stratos', sans-serif;
        font-weight: 400;
        color: #191919;
        font-size: 16px;
        line-height: 140%;

    }

    h6 {
      margin-bottom: .8rem;
        font-family: 'stratos', sans-serif;
        font-weight: 400;
        line-height: 140%;

        opacity: .5;
        font-size: 16px;
        color: #191919;
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



const Education = (props) => (
  <Wrapper>
    <Container>
       <Title>Education</Title>
       <EducationSection>
           <SingleEducation>
                <h4>University of Colorado at Boulder, Leeds School of Business</h4>
                <h6>Boulder, CO | 2007 - 2012</h6>
                <p>&bull; BS, Business Administration | Emphasis in Management & Marketing</p>
                <p>&bull; Co-founder & President of Leeds Business of Sports Club</p>
                <p>&bull; Study abroad at University of Salzburg in Salzburg, Austria</p>
           </SingleEducation>
        
       </EducationSection>
    </Container>
  </Wrapper>
)

Education.propTypes = {
  message: PropTypes.string,
}

Education.defaultProps = {
  message: `Title`,
}

export default Education
