import React from "react";
import { SearchContainer, SearchField } from "./searchStyle";
import SearchIcon from "@mui/icons-material/Search";
import { TextField, InputAdornment, IconButton } from "@mui/material";
import { useTheme } from "@emotion/react";

export default function Search() {
  const theme = useTheme();
  const textFieldStyle = {
    borderRadius: "16px",
  };

  return (
    <SearchContainer>
      <TextField
        id={"id"}
        style={textFieldStyle}
        label="Search"
        placeholder="Search...."
        fullWidth
        variant="outlined"
        InputProps={{
          endAdornment: (
            <InputAdornment
              position="end"
              style={{
                marginLeft: "10px",
              }}
            >
              <IconButton
                edge="end"
                color="inherit"
                aria-label="search"
                style={{
                  background: theme.palette.custom.blue,
                  color: theme.palette.custom.darkwhite,
                }}
              >
                <SearchIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </SearchContainer>
  );
}
