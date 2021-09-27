import React from 'react';
import { BrowserRouter, Switch, Route, Redirect, Router } from 'react-router-dom';
import './App.css';


//引入页面
import  Index  from "./pages/Index";
import Login from './pages/Login';
import Register from './pages/Register';
import Main from './pages/Main'
//引入组件


function App() {
  return (
    <div className="App">
      <BrowserRouter>
          <Switch>
              <Route path="/index" component={Index}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/main" component={Main}></Route>
              <Redirect from="/" to="/index" exact></Redirect>
          </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
