import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './style.css'
export default class XqMain extends Component{
    render () {
          const {tit} = this.props;
            if(tit !== undefined && tit){
                return (<div>
                <dl>
                <dt>
                <img src={tit.titles.imageurl} alt='' />
                </dt>
                <dd>
                <h5>{tit.titles.wname}</h5>
                <h6><span className='spo'>￥{tit.titles.jdPrice}</span><span>降价通知</span></h6>
                </dd>
                </dl>         
            </div>)
        }else{
            return (<div>QQ</div>)
        } 
    }
}