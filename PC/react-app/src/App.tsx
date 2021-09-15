import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Router } from 'react-router-dom';
import './App.css';


//引入页面
import  Index  from "./pages/Index";

//引入组件


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route path="/index" component={Index}></Route>
              <Redirect from="/" to="/index" exact></Redirect>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
