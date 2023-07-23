"use client"
import React from 'react';
import { Box, Typography , ThemeProvider } from '@mui/material'
import Navbar from './layout/Navbar'
import {theme} from './utils/mui/theme';
// import {Home} from "./pages/Home/page"

export default function App() {

  return (
    <ThemeProvider theme = {theme}> 
    <Box>
     {/* <Home/> */}
    </Box>
    </ThemeProvider>
  )
}
