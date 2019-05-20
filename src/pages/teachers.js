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
      tradition is headed by His Holiness the 17th Gyalwang Karmapa, Ogyen
      Trinley Dorje. {` `}
      <a href="https://kagyuoffice.org/">HH Karmapa's website</a>.
    </p>
    <p>
      HH Karmapa's main center in the US is{" "}
      <a href="https://kagyu.org/">Karma Triyana Dharmachakra</a> (KTD) in
      Woodstock, NY. The abbot there is{" "}
      <a href="https://kagyu.org/khenpo-karthar-rinpoche/">
        Khenpo Karthar Rinpoche
      </a>
      . We occasionally have guests teachers from KTD visiting the Cape - check
      our <Link to="/calendar">calendar</Link> page to see if there are special
      events coming up.
    </p>
    <p />
    <p />
  </Layout>
)

export default Teachers
