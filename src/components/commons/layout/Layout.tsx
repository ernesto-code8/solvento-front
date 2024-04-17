import React from "react"
import { Outlet } from "react-router-dom"
import { css } from "@emotion/css"

import Menu from "../menu/Menu"

const Layout: React.FC = () => {
  return (
    <div className={style.root}>
      <Menu />

      <main className={style.content}>
        <Outlet />
      </main>
    </div>
  )
}

const style = {
  root: css({
    display: "flex",
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    gap: "16px",
  }),

  content: css({
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    flex: 1,
    margin: "16px",
  }),
}

export default Layout
