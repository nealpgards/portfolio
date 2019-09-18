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
                <h4>Samplify Bio 🧬</h4>
                <h6>Operations Manager | Beverly, MA | 08/17 - 05/19</h6>
                <p>&bull; Managed day-to-day operations, production, procurement and delivery of DNA testing products for multiple customers worldwide.</p>
                <p>&bull; Owned and maintained ISO 13485 quality management system for a CE IVD medical device. Established and
maintained product and process documentation, work instructions, and risk validations.</p>
           </SingleExperience>
           <SingleExperience>
                <h4>Veritas Genetics 🧬</h4>
                <h6>Marketing & Brand Development | Danvers, MA | 11/15 - 02/17</h6>
                <p>&bull; Led cross functional collaboration of engineering, business development, and sales teams to define product requirements for multiple genetic testing reports. Responsible for managing roadmap, and prioritizing backlog.</p>
                <p>&bull; Designed, wireframed, and prototyped UX/UI for MVP of myGenome, a whole genome sequencing report. Worked with experience design (XD) team in-house at DigitasLBI for over six weeks of UX/UI design sprints.</p>
                <p>&bull; Owned, produced, and maintained customer facing documents and initial brand guidelines. Established design system to ensure consistency was maintained throughout organization.</p>
           </SingleExperience>
           <SingleExperience>
                <h4>Samplify Bio 🧬</h4>
                <h6>Business Development | Some time to another time</h6>
                <p>&bull; Managed day-to-day operations, production, procurement and delivery of DNA testing products for multiple customers worldwide.</p>
           </SingleExperience>
           <SingleExperience>
                <h4>Supshot ☠️</h4>
                <h6>Founder</h6>
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
