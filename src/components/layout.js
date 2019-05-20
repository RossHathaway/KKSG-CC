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
import {
  darkRed,
  lightYellow,
  darkYellow,
  medBlue,
  lightBlue,
  darkGray,
  lightGray,
} from "./colorScheme"

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
          display: flex;
          flex-direction: column;
          width: 100%;
          background-color: darkRed;
        `}
      >
        <div
          css={css`
            display: flex;
            justify-content: center;
            padding: 60px 0 80px;
          `}
        >
          <div
            css={css`
              width: 90%;
              max-width: 850px;
              padding: 20px 30px 50px 30px;
              /* background-color: rgba(${lightGray}, 0.8); */
              /* background-color: rgba(${lightYellow}, 0.6); */
              background-color: rgba(255,255,255, 0.6);
              color: ${medBlue};
            `}
          >
            {children}
          </div>
        </div>
        <footer
          css={css`
            align-self: flex-end;
            margin-top: auto;
          `}
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
