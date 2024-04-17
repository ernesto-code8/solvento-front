import React from "react"
import { useNavigate } from "react-router-dom"

import AppBar from "@mui/material/AppBar/AppBar"
import Toolbar from "@mui/material/Toolbar/Toolbar"
import MenuIcon from "@mui/icons-material/Menu"
import MenuItem from "@mui/material/MenuItem"

import { css } from "@emotion/css"
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart"
import LocalShippingIcon from "@mui/icons-material/LocalShipping"

const Menu: React.FC = () => {
  const navigate = useNavigate()

  return (
    <div>
      <AppBar position="relative">
        <Toolbar>
          <MenuIcon />
          <div className={styles.toolbar}>
            <span className={styles.title}>E-Commerce</span>

            <MenuItem onClick={() => navigate("/")}>
              <div className={styles.item}>
                <ShoppingCartIcon /> <span>Purchaces</span>
              </div>
            </MenuItem>
            <MenuItem onClick={() => navigate("/trucks")}>
              <div className={styles.item}>
                <LocalShippingIcon /> <span> Truck's dispatcher</span>
              </div>
            </MenuItem>
          </div>
        </Toolbar>
      </AppBar>
    </div>
  )
}

const styles = {
  toolbar: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",

    "& > span": {
      marginLeft: "16px",
    },

    " & .MuiMenuItem-root": {
      marginTop: "4px",
    },
  }),

  title: css({
    fontSize: "24px",
    fontWeight: "bold",
  }),

  item: css({
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "8px",
  }),
}

export default Menu
