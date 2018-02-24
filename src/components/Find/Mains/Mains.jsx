import React, {Component} from 'react'
import './style.css'
import {BrowserRouter as Router, Link} from 'react-router-dom';
class Mains extends Component{
    changes (){
       this.history.go(-1)
    }
    render(){
        console.log(this.props)
        return(
       <React.Fragment>
       <Router>
       <div>
       <div className='navs'>
               <Link to='/' onClick={this.changes.bind(this)} className='lefts'>＜</Link>
                <Link to='/find/xx'>发现频道</Link>
                <Link to='/find/dx'>购物屋</Link>
       </div>         
       </div>
       </Router>
    </React.Fragment>
        
        )
    }
}
export default Mains