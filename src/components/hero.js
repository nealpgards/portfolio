import React from "react"
import styled from '@emotion/styled'
import NealLogo from "../images/neal.svg";


const Container = styled.div`
  height: 100vh;
  margin: 0 auto;
  background-color: #ffffff;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  justify-items: center;
  align-items: center;
  padding: 0 4rem;

  @media (max-width: 768px) {
    min-height: 100vh;
    max-width: 100vw;
    padding: 0 2rem;

  }
`


const Center = styled.div`
  max-width: 480px;
  background-color: #ffffff;
  color: #222222;
  line-height: 150%;
  font-size: 16px;
  font-weight: normal;

  .logo {
    background-image: url(${NealLogo});
    height: 40px;
    background-repeat: no-repeat;
  }

  div {
    margin-top: 1rem;

    &:first-child {
      margin-top: 0;
      margin-bottom: 3rem;
    }
  }

  p {
    margin-top: .5rem;

    a {
      color: #FF00D6;
    }
  }
  li::before{
    content: "∙  "
  }
`



const Hero = () => (
    <Container>
      <Center>
          <div className="logo"/>
          <div>
          <p>Hello, I’m Neal.</p>
          </div>
          <div>
            <p>I’m a Product Manager and designer with experience building and launching digital and physical products. I love to think big and bring ideas to life from a sketch to prototype to launch.</p>
          </div>
          <div>
            <p>Previous Experience:</p>
            <ul>
              <li>Product Operations at Samplifybio 🧪</li>
              <li>Product/UX design at Veritas Genetics 🧬</li>
              <li>Founder of a failed startup ☠️</li>
            </ul>
          </div>
          <div>
            <p>I’m currently seeking product roles in NYC.</p>
          </div>
          <div>
            <p>I’m always happy to share ideas, book recommendations, design concepts, and would love to connect by <a href="https://linkedin.com/in/nealpgardner" target="_blank">LinkedIn</a> or <a href="mailto:nealpgardner@gmail.com">email</a>.</p>
          </div>
          <div>
            <p><span role="img" aria-label>✌🏼</span></p>
          </div>
      </Center>
    </Container>
)

export default Hero
