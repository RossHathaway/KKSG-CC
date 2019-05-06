import React from "react"
import { Global, css } from "@emotion/core"

const layout = ({ children }) => (
  <Global
    styles={css`
      html {
        box-sizing: border-box;
      }
      *,
      *:before,
      *:after {
        box-sizing: inherit;
      }
    `}
  />
)
