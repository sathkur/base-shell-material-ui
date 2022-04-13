import React, { useState } from "react";
import { BrowserRouter, useRoutes } from 'react-router-dom';

import './App.css';
import routes from './routes';
import themeObject from './theme';

import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { createTheme, ThemeProvider } from "@mui/material";

const Routing = () => {
  const routing = useRoutes(routes);
  return routing;
}

function App() {
  const [theme, setTheme] = useState(createTheme(themeObject));
  return (
    <React.Fragment>
      <BrowserRouter>
        <ThemeProvider theme={theme}>
          <Routing/>
        </ThemeProvider>
      </BrowserRouter>
    </React.Fragment>
  );
}


export default App;