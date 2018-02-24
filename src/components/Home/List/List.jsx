import React, { Component } from 'react';
import {withRouter} from 'react-router-dom'; // 做跳转
import './List.css'

@withRouter
 class List extends Component {
    goToDetail(titles){
        const {history} =this.props;
         history.push({pathname:'/xq', state:{titles}})
         console.log(titles)
    }
    render() {
     const { titles } = this.props;
     if(titles!==undefined && titles){   
       return ( 
               <dl onClick={this.goToDetail.bind(this, titles)}>
                   <dt><img src={titles.imageurl} alt='' /></dt>
                    <dd>
                        <h5 className='ps'><p>{titles.wname}</p></h5>
                        <h6><span>价钱：{titles.jdPrice}</span><span>好评：{titles.good}</span></h6>
                    </dd>
                </dl>
        )
       } else {
           return (
               <div></div>
           )
       }
    }
}
export default List

