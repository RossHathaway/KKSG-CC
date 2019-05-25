import React from "react"
import { Link } from "gatsby"
import { css } from "@emotion/core"

import Layout from "../components/layout"
import SEO from "../components/seo"

const Calendar = () => (
  <Layout>
    <SEO title="Events Calendar" />
    <h1>Events Calendar</h1>
    {/* <iframe
      src="https://calendar.google.com/calendar/embed?src=hathaway.ross%40gmail.com&ctz=America%2FNew_York"
      style={{
        border: 0,
        width: 800,
        height: 800,
        frameborder: 0,
        scrolling: true,
      }}
    /> */}
    <iframe
      src="https://calendar.google.com/calendar/b/2/embed?height=600&amp;wkst=1&amp;bgcolor=%23fff9cc&amp;ctz=America%2FNew_York&amp;src=bWZ1ZGhzOWxnMDM3OWpnaXZtNmJsaW0yY29AZ3JvdXAuY2FsZW5kYXIuZ29vZ2xlLmNvbQ&amp;color=%234285F4&amp;showPrint=0&amp;showCalendars=1&amp;title=Cape%20Cod%20Karma%20Kagyu%20Study%20Group%20Events%20Calendar"
      style={{
        border: 0,
        width: 800,
        height: 600,
        frameborder: 0,
        scrolling: false,
      }}
    />
  </Layout>
)

export default Calendar
