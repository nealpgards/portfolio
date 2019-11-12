import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "neal_logo.png" }) {
        childImageSharp {
          fluid(maxWidth: 197) {
            ...GatsbyImageSharpFluid_noBase64
          }
        }
      }
    }
  `)

  return <Img className="neal" fluid={data.placeholderImage.childImageSharp.fluid} />
}

export default Image
