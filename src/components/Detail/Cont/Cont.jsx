import React,{Component} from 'react';
import './style.css'
export default class Cont extends Component{
    render(){
        return(<div className='contains'>
            <h6><span>开通PLUS,立享价值150元全品类卷礼包</span><span>＞</span></h6>
            <h6><span><small>白条</small>激活白条新用户直降10元</span><span className='icon iconfont icon-share'></span></h6>
            <h6>
                <p><span><small>促销</small> <b>满减</b>满10减1</span><span className='icon iconfont icon-share'></span></p>
            </h6>
            </div>)
    }
}
