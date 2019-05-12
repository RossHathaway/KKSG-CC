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
  darkGray,
  lightGray,
} from "./colorScheme.js"

const Container = styled.nav`
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-width: 70px;
`

const Menu = () => (
  <Container>
    <Link to="/">Home</Link>
    <Link to="/calendar">Calendar</Link>
    <Link to="/practice">Our regular practice</Link>
    <Link to="/teachers">Our teachers</Link>
    <Link to="/support">Support Tibetan Nuns</Link>
    <Link to="/learn">Learn More</Link>
  </Container>
)

export default Menu
