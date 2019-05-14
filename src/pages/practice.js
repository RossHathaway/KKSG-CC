import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SecondPage = () => (
  <Layout>
    <SEO title="About our practice" />
    <h1>Our Sunday Practice</h1>
    <p>Everyone is welcome to join us every Sunday from 11 am - 12 pm</p>
    <p>
      Location: <a href="https://evokeyogacapecod.com/">Evoke Yoga</a>
    </p>
    <p>64 Enterprise Rd</p>
    <p>Hyannis, MA</p>
    <p>U.S.A. 02601</p>
  </Layout>
)

export default SecondPage
