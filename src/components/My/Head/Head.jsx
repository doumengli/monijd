import React, {Component} from 'react';
import {BrowserRouter as Router, Link} from 'react-router-dom';
import './style.css'
export default class Head extends Component{
    changes (){
        this.history.go(-1)
     }
    render(){
        return(
       <React.Fragment>
       <Router>
       <div className='dsd'>
               <Link to='/' className='lefts' onClick={this.changes.bind(this)}><i className='icon iconfont icon-xiangzuo'></i></Link>
                 <Link to=''>京东购物</Link>
                <a></a>
       </div>
       </Router>
    </React.Fragment>
        
        )
    }
}
    