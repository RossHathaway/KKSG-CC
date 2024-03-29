import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"
import styled from "@emotion/styled"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const flexContainer = styled.div`
  display: flex;
`

const IndexPage = () => (
  <Layout>
    <SEO
      title="Home"
      keywords={[`Cape Cod`, `Buddhism`, `Tibet`, `meditation`]}
    />

    <h1
      css={css`
        margin: 0 0 0.5em;
      `}
    >
      Welcome
    </h1>
    <p>
      We are a small group of Dharma practitioners that meet on Sundays at 11 am
      for an hour long meditation on Chenrezig, the Buddha of Compassion.
    </p>
    <p>
      {" "}
      Learn more about our meditation practice <Link to="/practice/">here</Link>
      .{" "}
    </p>
    <p>
      We also organize events - check out our{" "}
      <Link to="/calendar/">calendar</Link> for more info.
    </p>
    <div>
      {/* style={{ maxWidth: `300px`, marginBottom: `1.45rem` }} */}
      <Image />
    </div>
  </Layout>
)

export default IndexPage
