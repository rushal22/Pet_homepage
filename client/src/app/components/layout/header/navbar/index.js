"use client";
import { NavMenueItems } from "@/app/constants";
import { useTheme } from "@mui/material";
import { NavbarContainer, NavbarMenueItem } from "./navbarStyle";
import { useState } from "react";

export default function NavBar() {
  const theme = useTheme();
  const [selected, setSelected] = useState(1);
  const selectedStyle = {
    color: theme?.palette?.custom?.blue
,
    cursor: "pointer",
    borderBottom: `2px solid ${theme?.palette?.custom?.blue
}`,
  };

  return (
    <NavbarContainer>
      {NavMenueItems && NavMenueItems.length
        ? NavMenueItems.map((menu) => (
            <NavbarMenueItem
              key={menu.id}
              style={selected === menu.id ? selectedStyle : null}
              onClick={() => setSelected(menu.id)}
            >
              {menu.name}
            </NavbarMenueItem>
          ))
        : null}
    </NavbarContainer>
  );
}
