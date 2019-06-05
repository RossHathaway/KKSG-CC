import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import {
  darkRed,
  lightYellow,
  // darkYellow,
  // medBlue,
  // darkGray,
  // lightGray,
} from "./colorScheme.js"

const Spacer = styled.div`
  flex: 1;
`

const Header = () => (
  <header
    css={css`
      background: rgb(${lightYellow});
      overflow: auto;
    `}
  >
    <div
      css={css`
        display: flex;
        justify-content: center;
        background: rgb(${lightYellow});
        padding: 0.5rem 0.5rem;
        /* border: 2px solid darkred; */
        margin: 7px;
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
            border: 3px solid darkred;
            background-color: rgb(${lightYellow});
            color: darkred;
            font-size: 24px;
            padding: 10px 15px;
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
            color: `darkred`,
            textDecoration: `none`,
            fontSize: `40px`,
          }}
        >
          Cape Cod Karma Kagyu Study Group
        </Link>
      </h1>
      <Spacer />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
