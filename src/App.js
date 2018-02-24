import React, { Component } from 'react';
import ROUTER_MAP from './router/routerMap'
import {NavLink, Route} from 'react-router-dom'
import './App.css';
import './Icon/iconfont.css'
class App extends Component {
  render() {
    return (
     <React.Fragment>
      <div className='section'>
       {
            ROUTER_MAP.ROUTER.map((child,idx) => {
                return <Route  path={child.path} key={idx} exact component={child.component}>{child.text}</Route>
            }) 
           }
       
      </div>
      <div className='footer'>
       {
        ROUTER_MAP.NAV.map((child,idx) => {
            return <NavLink to={child.to} key={idx} exact={true}>
            <dt className={child.icon}></dt>
            <dd>{child.text}</dd  >
            </NavLink>
        }) 
       }
       </div>
      </React.Fragment>
    
    );
  }
}

export default App;
