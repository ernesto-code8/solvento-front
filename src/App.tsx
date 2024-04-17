import React, { Suspense } from "react"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"

import { css } from "@emotion/css"
import { LinearProgress } from "@mui/material"

const Layout = React.lazy(() => import("./components/commons/layout/Layout"))
const Purchases = React.lazy(() => import("./pages/purchases/purchases"))
const Trucks = React.lazy(() => import("./pages/trucks/trucks"))

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<LinearProgress className={progressStyle} variant="indeterminate" />}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="" element={<Purchases />} />
            <Route path="/trucks" element={<Trucks />} />
          </Route>

          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  )
}

const progressStyle = css({
  "&.MuiLinearProgress-root": {
    zIndex: 2050,
    position: "fixed",
    width: "100vw",
    top: 0,
  },
})

export default App
