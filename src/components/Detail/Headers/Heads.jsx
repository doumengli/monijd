import React, {Component} from 'react';
import {withRouter} from 'react-router-dom';
import './style.css'

@withRouter
export default class Heads extends Component{
    changes() {
        alert(11)
       this.history.go(-1)
    }
    tjgwc () {
        alert(11);
    }
    render(){
        return (
          <div>
            <div className='xqh'>
           <a className='icon iconfont icon-xiangzuo' onClick={this.changes.bind(this)}> </a>
            <a></a>
            <a>商品</a>
            <a>详情</a>
            <a>评价</a>
            <a><i className='icon iconfont icon-fenxiang4'></i><i className='icon iconfont icon-share'></i></a>
          
            </div>
            <div className='xqfoot'>
              <dl><dt className='icon iconfont icon-erji'></dt><dd>供应商</dd></dl>
              <dl><dt className='icon iconfont icon-wode'></dt><dd>店铺</dd></dl>
              <dl><dt className='icon iconfont icon-gouwuche'></dt><dd>购物车</dd></dl>
              <dl onClick={this.tjgwc.bind(this)}><dt ></dt><dd>加入购物车</dd></dl> 
              <dl><dt ></dt><dd>立即购买</dd></dl>
              </div>   
            </div>
        )
    }
}

