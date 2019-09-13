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

const ExperienceSection = styled.div`
`

const SingleExperience = styled.div`
    padding-bottom: 2rem;

    h4, h6, p {
        margin-bottom: .75rem;
    }




`



const Experience = ({ siteTitle }) => (
  <Wrapper>
    <Container>
       <Title>Experience</Title>
       <ExperienceSection>
           <SingleExperience>
                <h4>Operations Manager</h4>
                <h6>Samplify Bio</h6>
                <p>&bull; Managed day-to-day operations, production, procurement and delivery of DNA testing products for multiple customers worldwide.</p>
                <p>&bull; Managed day-to-day operations, production, procurement and delivery of DNA testing products for multiple customers worldwide.</p>
           </SingleExperience>
           <SingleExperience>
                <h4>THis is my title</h4>
                <h6>this is my company</h6>
                <p>This is the description of what i did at that company</p>
           </SingleExperience>
           <SingleExperience>
                <h4>THis is my title</h4>
                <h6>this is my company</h6>
                <p>This is the description of what i did at that company</p>
           </SingleExperience>
           <SingleExperience>
                <h4>THis is my title</h4>
                <h6>this is my company</h6>
                <p>This is the description of what i did at that company</p>
           </SingleExperience>
       </ExperienceSection>
    </Container>
  </Wrapper>
)

Experience.propTypes = {
  siteTitle: PropTypes.string,
}

Experience.defaultProps = {
  siteTitle: ``,
}

export default Experience
