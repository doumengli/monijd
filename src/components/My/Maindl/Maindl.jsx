import React, { Component } from 'react';
import './style.css'
import { connect } from 'react-redux';
export default class Maindl extends Component{
    render(){
        return(
            <div className='gt'>
            <p className='dl'>登录</p>
            <p className='dl ydl'>一键登录</p>
            <h5><span><i className='icon iconfont icon-anquanshezhi'></i>忘记密码</span><span><i className='icon iconfont icon-shouji'></i>手机快速祖册</span></h5>
           <h6 className='ts'><span>其他登录方式</span></h6>
           <h4><i className='icon iconfont icon-qq'></i></h4>
           <h5 className='ft'>登录代表你已经同意京东的隐私权益</h5>
            </div>
        )
    }
}