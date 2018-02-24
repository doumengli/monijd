import React, {Component} from 'react'
import './style.css'
let i = 0;
export default class GwCar extends Component{
    constructor () {
        super()
        this.state = {
            num:0
        }
    }
    // 累加
   handleClick (flag) {
       const {num} = this.state
       const {title, parentClick} = this.props;
       this.setState({
           num:num+1
       })
      parentClick(title.price); // 给父级传单价
   }
   handleJianClick () {
       const {num} = this.state
       const {parentJianClick, title} = this.props;
       if(num>0){      
            this.setState({
                num:num-1
            })
       } else {
        this.setState({
            num:0
        })
       }
    
       parentJianClick(title.price)
   }  
  
    render(){
        const {num} = this.state;
        const {title} = this.props;
        return( 
            <dl className='dlis'>
                <dt>
      <img src="http://m.360buyimg.com//mobilecms/s276x276_jfs/t475/188/703661745/47407/2dea1cd7/54802342Nf64c9062.jpg!q70.jpg" />
                </dt>
                <dd>
                     <p><a>类型：{title.name}</a><a>单价：{title.price}瓶/元</a></p>
                    <h6><span className='jian' onClick={this.handleJianClick.bind(this)}>-</span>  <span >数量:{num}个</span>  <span className='jia' onClick={this.handleClick.bind(this)}>+</span></h6>
                 </dd>
           </dl> 
            
        )
    }
}