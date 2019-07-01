import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import Img from "gatsby-image"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PracticePage = props => (
  <Layout>
    <SEO title="About our practice" />
    <h1>Our Sunday Practice</h1>
    <div />
    <Img
      fluid={props.data.Chenrezig.childImageSharp.fluid}
      alt="image of Chenrezig, the Buddha of Compassion"
      fadeIn={true}
      style={{
        // ...(props.style || {}),
        maxWidth: "400px",
        /*props.data.Chenrezig.childImageSharp.fluid
            .presentationWidth,*/
        // margin: "0 auto", // Used to center the image
      }}
    />
    <p>Everyone is welcome to join us each Sunday from 11 am - 12 pm.</p>
    <p>
      Our meditation involves doing a sadhana, which is a type of meditation
      that involves visualization, prayer, mantras, and silent meditation. The
      sadhana we practice is common in the Kagyu school of Tibetan Buddhism; it
      is a traditional sadhana of Chenrezig, the Buddha of compassion.
    </p>
    <div
      css={css`
        p {
          margin: 0.2rem;
        }
      `}
    >
      <p>
        Location: <a href="https://evokeyogacapecod.com/">Evoke Yoga</a>
      </p>
      <p>64 Enterprise Road</p>
      <p>Hyannis, MA 02601</p>
      <p>U.S.A.</p>
    </div>
    <Img
      fluid={props.data.groupPic.childImageSharp.fluid}
      alt="our group after a meditation at Evoke Yoga"
      fadeIn={true}
    />
  </Layout>
)

export default PracticePage

// export const fluidMaxWidImg = graphql`
//   fragment wideFluidImg on File {
//     childImageSharp {
//       fluid(maxWidth: 800) {
//         ...GatsbyImageSharpFluid_withWebp
//       }
//     }
//   }
// `

export const pageQuery = graphql`
  query {
    groupPic: file(relativePath: { eq: "Our_Group.JPG" }) {
      childImageSharp {
        fluid(maxWidth: 800) {
          ...GatsbyImageSharpFluid_withWebp
        }
      }
    }
    Chenrezig: file(relativePath: { eq: "Chenrezig.jpg" }) {
      childImageSharp {
        fluid(maxWidth: 500) {
          ...GatsbyImageSharpFluid_withWebp
          presentationWidth
        }
      }
    }
  }
`
