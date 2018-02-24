import React, { Component} from 'react';
import {connect} from 'react-redux'
import GwCar from '../../components/Gw/GwCar'
// import {add} from '../../store/actions/Gws'
import * as gws from '../../store/actions/Gws' //获取所有的
import {bindActionCreators} from 'redux'
import { getPrice,jian } from './../../store/actions/Gws';
class Gw extends Component {
 constructor () {
        super();
        this.state={
            products:[
                {
                    name:"香蕉牛奶",
                    price:4.5
                },
                {
                    name:"蒙牛酸奶",
                    price:2.5
                },
                {
                    name:"名人苏打水",
                    price:3
                },
                {
                    name:"尖叫",
                    price:5
                }
            ]
        }
    }
    getFlag (total){
        const {dispatch} = this.props;
        dispatch({
            type:'GET_TOTAL',
            total
        })
    }
    // 加
    getTotal (price) {
       // dispatch(getPrice(price)) // 显式
       //getPrice(price) //隐式
       const {aa} =this.props;
       aa.getPrice(price)
    }
    // 减
    getTotalJ(price){
       console.log(price)
        const {aa} = this.props;
       aa.jian(price)
    }
render () {
   const {total, sum} =this.props;
   const {products} = this.state;
    return(
        <div>
        {
            products.map((item,idx) =>{
                return <GwCar 
                        parentClick={(total)=>this.getTotal(total)} 
                        parentJianClick={(total)=>this.getTotalJ(total)}
                        total={total}
                        title={item}
                        key={idx}
                        />
            })
        }
         <div className='zj'>总价:{total}</div>   
         <div className='zs'>{sum}</div>
        </div>)
}
}
const mapStateToProps = (state) => {
   return {
       total:state.gw.total,
       sum:state.gw.sum
   }
}
 const mapDispatchToProps = (dispatch) => {
    return {
        aa:bindActionCreators(gws,dispatch)
    }
}
export default connect(mapStateToProps,mapDispatchToProps) (Gw)

