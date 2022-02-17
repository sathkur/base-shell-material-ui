import React from "react";
import { BrowserRouter, useRoutes } from 'react-router-dom';
import './App.css';
import routes from './routes';


const Routing = () => {
  const routing = useRoutes(routes);
  return routing;
}

function App() {
  return (
    <React.Fragment>
      <BrowserRouter>
        <Routing/>
      </BrowserRouter>
    </React.Fragment>
  );
}



export default App;