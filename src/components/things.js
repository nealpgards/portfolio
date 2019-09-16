import PropTypes from "prop-types"
import React from "react"
import "../components/main.css"
import styled from '@emotion/styled'

const Wrapper = styled.section`
  width: 100%;
  background-color: #ffffff;
`
const Container = styled.div`
  max-width: 960px;
  padding: 1rem 3rem;
  padding-top: 4rem;
  margin: 0 auto;

  @media (max-width: 768px) {
  }
`

const Title = styled.h2`
  color: #191919;
  font-weight: 400;
  font-size: 2rem;
  opacity: 0.9;
font-family: buena-park-jf, serif;
text-align: center;



@media (max-width: 768px) {
  font-size: 2rem;
}
`

const ThingsSection = styled.div`
display:grid;
  max-width: 960px;
  grid-column-gap: 2rem;
  padding: 1rem 3rem;
  grid-template-columns: repeat(4,1fr);
  grid-template-rows: auto;
  justify-items: stretch;
  margin: 0 auto;

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }
`

const SingleThings = styled.div`
    padding-bottom: 2rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;

    .image-icon {
        width: 40px;
        height: 40px;
        border-radius: 100%;
        background-color: #FF44A5;
        margin-bottom: 1rem;
    }




`



const Things = ({ siteTitle }) => (
  <Wrapper>
    <Container>
       <Title>My Focus</Title>
       <ThingsSection>
           <SingleThings>
                <div className="image-icon"></div>
                <h5>text</h5>
           </SingleThings>
           <SingleThings>
           <div className="image-icon"></div>
                <h5>text</h5>
           </SingleThings>
           <SingleThings>
           <div className="image-icon"></div>
                <h5>text</h5></SingleThings>
           <SingleThings>
           <div className="image-icon"></div>
                <h5>text</h5>
           </SingleThings>
       </ThingsSection>
    </Container>
  </Wrapper>
)

Things.propTypes = {
  siteTitle: PropTypes.string,
}

Things.defaultProps = {
  siteTitle: ``,
}

export default Things
