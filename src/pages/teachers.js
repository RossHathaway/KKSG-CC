import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Teachers = () => (
  <Layout>
    <SEO title="Teachers and Lineage" />
    <h1>Our Teachers and Lineage</h1>
    <p>
      This group is organized by Amy McCracken, an ordained interfaith minister
      and a long-time student of Buddhism.{" "}
    </p>
    <p>
      Our lineage is the Karma Kagyu tradition of Tibetan Buddhism. The Kagyu
      tradition is headed by HH the 17th Gyalwang Karmapa, Ogyen Trinley Dorje.{" "}
      {` `}
      <a href="https://kagyuoffice.org/">HH Karmapa's website</a>.
    </p>
    <p>
      HH Karmapa's main center in the US is{" "}
      <a href="https://kagyu.org/">Karma Triyana Dharmachakra</a> in upstate NY.
      The abbot there is{" "}
      <a href="https://kagyu.org/khenpo-karthar-rinpoche/">
        Khenpo Karthar Rinpoche
      </a>
      , who is one of our teachers here, and sometimes students on the Cape will
      drive up to visit KTD. We also have guests teachers from KTD visit the
      Cape occasionally, so check our <Link to="/calendar">calendar</Link> page
      to see if there is anything happening soon.
    </p>
    <p />
    <p />
  </Layout>
)

export default Teachers
