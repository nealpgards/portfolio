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

const InfoSection = styled.div`
`

const SingleInfo = styled.div`
    padding-bottom: 2rem;

    h4, h6, p {
        margin-bottom: .75rem;
    }
`

const Info = (props) => (
  <Wrapper>
    <Container>
       <Title>Info</Title>
       <InfoSection>
           <SingleInfo>
                <h4>{props.title}</h4>
                <h6>{props.company}</h6>
                <p>{props.description}</p>
           </SingleInfo>
        
       </InfoSection>
    </Container>
  </Wrapper>
)

Info.propTypes = {
  message: PropTypes.string,
}

Info.defaultProps = {
  message: `Title`,
}

export default Info
