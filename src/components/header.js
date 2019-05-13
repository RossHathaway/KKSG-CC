import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import {
  darkRed,
  lightYellow,
  darkYellow,
  medBlue,
  darkGray,
  lightGray,
} from "./colorScheme.js"

const Spacer = styled.div`
  flex: 1;
`

const Header = () => (
  <header
    css={css`
      display: flex;
      justify-content: center;
      background: lightYellow;
      width: 100%;
      padding: 0.5rem 0.5rem;
      /* what does below do???? */
      &::after {
        flex: 1;
      }
    `}
  >
    <Spacer>
      <button
        css={css`
          /* flex: 1; */
        `}
      >
        Menu
      </button>
    </Spacer>
    <h1
      css={css`
        margin: 0;
        margin-left: auto;
        margin-right: auto;
      `}
    >
      <Link
        to="/"
        style={{
          color: darkRed,
          textDecoration: `none`,
        }}
      >
        Cape Cod Karma Kagyu Study Group
      </Link>
    </h1>
    <Spacer />
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
