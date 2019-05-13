import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { Global, css } from "@emotion/core"
import styled from "@emotion/styled"
import {
  darkRed,
  lightYellow,
  darkYellow,
  medBlue,
  lightBlue,
  darkGray,
  lightGray,
} from "./colorScheme.js"

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  background: ${lightGray};
  padding: 0.5em 0.5em 0.5em 0.5em;
  min-width: 250px;
  /* height: auto; */
`
const linkStyle = `
  padding: 0.5em 1em;
  margin: 5px 0;
  font-size: 28px;
  color: ${darkRed};
  border: solid ${darkRed} 2px;
  text-decoration: none;
  :hover {
    background-color: ${lightBlue};
  }
  :active {
    background-color: ${darkGray};
    border: none;
  }
`

const Menu = () => (
  <Container>
    <Link
      to="/"
      css={css`
        ${linkStyle}
      `}
    >
      Home
    </Link>

    <Link
      to="/calendar"
      css={css`
        ${linkStyle}
      `}
    >
      Calendar
    </Link>

    <Link
      to="/practice"
      css={css`
        ${linkStyle}
      `}
    >
      Practice with us
    </Link>

    <Link
      to="/teachers"
      css={css`
        ${linkStyle}
      `}
    >
      Our teachers
    </Link>

    <Link
      to="/support"
      css={css`
        ${linkStyle}
      `}
    >
      Support Tibetan Nuns
    </Link>

    <Link
      to="/learn"
      css={css`
        ${linkStyle}
      `}
    >
      Learn More
    </Link>
  </Container>
)

export default Menu
