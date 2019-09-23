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

const SkillsSection = styled.div`
`

const SingleSkills = styled.div`
    padding-bottom: 1rem;

    h4, h6, p {
        letter-spacing: 0.1px;
    }

    h4 {
      margin-bottom: .6rem;
        font-family: 'stratos', sans-serif;
        font-weight: 400;
        color: #191919;
        line-height: 140%;
        font-size: 16px;
    }

    h6 {
      margin-bottom: .8rem;
        font-family: 'stratos', sans-serif;
        font-weight: 400;
        opacity: .5;
        line-height: 140%;
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



const Skills = (props) => (
  <Wrapper>
    <Container>
       <Title>Skills</Title>
       <SkillsSection>
           <SingleSkills>
                <h4>General</h4>
                <h6>UX research, User journeys, Personas, User Interviews, Wireframing, Prototyping</h6>
                
           </SingleSkills>
           <SingleSkills>
                 <h4>Design Tools</h4>
                <h6>Sketch, Figma, Adobe Illustrator, Adobe Photoshop, Invision, Marvel</h6>
           </SingleSkills>
        
       </SkillsSection>
    </Container>
  </Wrapper>
)

Skills.propTypes = {
  message: PropTypes.string,
}

Skills.defaultProps = {
  message: `Title`,
}

export default Skills
