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
  padding: 8rem 3rem 4rem 3rem;
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

const ExperienceSection = styled.div`
`

const SingleExperience = styled.div`
    padding-bottom: 2.2rem;

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
                <p>&bull; Designed, wireframed, and prototyped UX/UI for MVP of myGenome, a whole genome sequencing report. Worked with experience design team in-house at DigitasLBI for over six weeks of UX/UI design sprints.</p>
                <p>&bull; Owned, produced, and maintained customer facing documents and initial brand guidelines. Established design system to ensure consistency was maintained throughout organization.</p>
           </SingleExperience>
           <SingleExperience>
                <h4>Samplify Bio 🧬</h4>
                <h6>Product Development | Beverly, MA | 01/15 - 11/15</h6>
                <p>&bull; Sourced materials for development of 2 DNA collection kits. Reduced material costs 60% negotiating with suppliers.</p>
                <p>&bull; Implemented and optimized internal processes for manufacturing, inventory management, shipping, and logistics.</p>
                <p>&bull; Developed strategy for growth and customer acquisition. Researched market needs, determined competitive weaknesses and created messaging for company website and sales materials. Led to seed investment round.</p>
           </SingleExperience>
           <SingleExperience>
                <h4>Supshot 📱</h4>
                <h6>Founder | Boston, MA | 2012 - 2014</h6>
                <p>&bull; Startup founder of a mobile application that allowed users to license and monetize the user generated content created on their
smartphone.</p>
<p>&bull; Managed development of iOS app from idea to live product. Created PRDs, user stories, flow diagrams, to create
 development plan and roadmap.</p>
 <p>&bull; Owned and developed creative strategy of branding, design, and UX/UI of mobile application and website.</p>
 <p>&bull; Iterated the product through several pivots and could not find a good business model/market fit. ☠️</p>


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
