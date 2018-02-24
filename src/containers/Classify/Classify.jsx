import React, { Component } from 'react';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './style.css'
export default class Classify extends Component {
    render() {
        return (
            <React.Fragment>
                <Router>
                    <div>
                        <div className='navs'>
                            <Link to='/classify/sj'>手机</Link>
                            <Link to='/classify/zxj'>照相机</Link>
                            <Link to='/classify/dn'>电脑</Link>
                        </div>
                        <Route path='/classify/sj' component={() => <div>手机</div>}></Route>
                        <Route path='/classify/zxj' component={() => <div>照出你的光彩</div>}></Route>
                        <Route path='/classify/dn' component={() => <div>LENO DER</div>}></Route>
                    </div>
                </Router>
            </React.Fragment>
        )
    }
}
