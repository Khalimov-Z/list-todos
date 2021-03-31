import React from 'react'
import {ThemeProvider} from "styled-components";
import { GlobalStyles } from "./Globalstyle";
import { lightTheme, darkTheme } from "./Themes"
import {useDarkMode} from './useDarkMode'
import Toggle from './Toggler'

function DarkTheme () {
  const [theme, themeToggler, mountedComponent] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if(!mountedComponent) return <div/>
  return (
    <div>
      <ThemeProvider theme={themeMode}>
        <>
          <GlobalStyles/>
          <Toggle theme={theme} toggleTheme={themeToggler} />
        </>
      </ThemeProvider>
    </div>
  )
}

export default DarkTheme