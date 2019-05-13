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
  background: ${lightGray};
  padding: 0.5em 0.5em 0.5em 0.5em;
  min-width: 250px;
`
const Button = styled.button`
  padding: 0.5em 1em;
  margin: 5px 0;
  font-size: 28px;
  color: ${darkRed};
  border: solid ${darkRed} 1px;
`

const Menu = () => (
  <Container>
    <Button>
      <Link to="/">Home</Link>
    </Button>
    <Button>
      <Link to="/calendar">Calendar</Link>
    </Button>

    <Button>
      <Link to="/practice">Practice with us</Link>
    </Button>

    <Button>
      <Link to="/teachers">Our teachers</Link>
    </Button>

    <Button>
      <Link to="/support">Support Tibetan Nuns</Link>
    </Button>

    <Button>
      <Link to="/learn">Learn More</Link>
    </Button>
  </Container>
)

export default Menu
