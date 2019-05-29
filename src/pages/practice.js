import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const PracticePage = () => (
  <Layout>
    <SEO title="About our practice" />
    <h1>Our Sunday Practice</h1>
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
  </Layout>
)

export default PracticePage
