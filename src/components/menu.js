import { Link } from "gatsby"
// import PropTypes from "prop-types"
import React from "react"
import { css } from "@emotion/core"
import styled from "@emotion/styled"
import {
  darkRed,
  // lightYellow,
  // darkYellow,
  // medBlue,
  lightBlue,
  darkGray,
  lightGray,
} from "./colorScheme.js"

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  background: rgb(${lightGray});
  padding: 0.5em 0.5em 0.5em 0.5em;
  min-width: 250px;
  /* border-top: solid darkred 2px; */
`
const PageLink = styled(Link)`
  padding: 0.5em 1em;
  margin: 5px 0;
  font-size: 28px;
  color: darkred;
  border: solid darkred 2px;
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
    <PageLink to="/">Home</PageLink>

    <PageLink to="/calendar">Calendar</PageLink>

    <PageLink to="/practice">Practice with us</PageLink>

    <PageLink to="/teachers">Our teachers</PageLink>

    <PageLink to="/helpNuns">Help Tibetan Nuns</PageLink>

    <PageLink to="/learn">Learn More</PageLink>
  </Container>
)

export default Menu
