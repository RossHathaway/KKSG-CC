/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/core"

import Header from "./header"
import Menu from "./menu"

const Layout = ({ children }) => (
  <>
    <Global
      styles={css`
        html {
          box-sizing: border-box;
          font-family: "Open Sans", system-ui, sans-serif, serif;
          font-size: 18px;
          line-height: 1.4;
        }
        *,
        *:before,
        *:after {
          box-sizing: inherit;
        }
        body {
          margin: 0;
        }
      `}
    />
    <Header />

    <div
      css={css`
        display: flex;
      `}
    >
      <Menu />
      <main
        css={css`
          padding-left: 2rem;
        `}
      >
        {children}
        <footer
        // css={css`
        //   display: flex;
        //   justify-content: flex-end;
        // `}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </main>
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
