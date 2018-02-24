import React, { Component} from 'react';
import Header from '../../components/Find/Header'
import Mains from '../../components/Find/Mains'
import PureRenderMixin from 'react-addons-pure-render-mixin'; // 性能优化
import {mixin} from 'core-decorators'
const newObj = {
    dLM () {
        console.log('hello')
    }
}
const newObj1 = {
    componentDidMount (){
        setTimeout(()=>{
            this.setState({
                val:['tianjing']
            })
        },2000)
    }
}

// componentDidMount(){ //不成功
//     setTimeout(()=>{
//         this.setState({
//             val:'adaadd'
//         })

//     },2000)
// }
// componentWillUpdate(){
//     console.log('豆孟丽')
// }

@mixin (newObj, newObj1)
export default class Find extends Component{
    constructor () {
        super()
        this.state={
            val:['北京','上海']
        }
       // this.shouldComponentUpdata = PureRenderMixin.shouldComponentUpdata.bind(this)  
    }
    change(e) {
        console.log(e.target.options[0].value)
        const {options} = e.target
        const arr=Object.keys(e.target.options).filter((i)=>e.target.options[i].selected ===true).map((x)=>e.target.options[x].value)
        this.setState({
            val:arr
        })
        console.log(e.target.value)
        console.log(e.target.checked)
    }
    render () {
        const {val} = this.state;
        return (
            <div>
            <Mains/>
            <Header/>
            <div>
            <select value={val} multiple={true} onChange={this.change.bind(this)}>
                <option>北京</option>
                <option>上海</option>
                <option value='tianjing'>天津</option>
           </select>
            </div>
         
            </div>
        )
    }
}
/************单选框***************/
// export default class Find extends Component{
//     constructor () {
//         super()
//         this.state={
//             value:''
//         }
//     }
//     change(e) {
//         const {value} = e.target
//         this.setState({
//             value:e.target.value
//         })
//         console.log(e.target.value)
//     }
//     render () {
//         const {value} = this.state;
//         return (
//             <div>
//             <div>
//            <input type='radio' value='足球' checked={value==='足球'}  onChange={this.change.bind(this)}/>
//            <input type='radio' value='篮球' checked={value==='篮球'}  onChange={this.change.bind(this)}/>
//            <input type='radio' value='波波球' checked={value==='波波球'}  onChange={this.change.bind(this)}/>
//             </div>
         
//             </div>
//         )
//     }
// }
/****************多选************************/
// constructor () {
//     super()
//     this.state={
//         val:[]
//     }
// }
// change(e) {
//     const {value,checked} = e.target
//    let {val} = this.state;
//     if(checked && val.indexOf(value) === -1){
//         val.push(value)
//     } else{
//         val=val.filter(i=>i!==value)
//     }

//     this.setState({
//         val
//     })
//     console.log(e.target.value)
//     console.log(e.target.checked)
// }
// render () {
//     const {val} = this.state;
//     return (
//         <div>
//         <Header/>
//         <div>
//        <input type='checkbox' value='足球' checked={val.indexOf('足球')!==-1}  onChange={this.change.bind(this)}/>
//        <input type='checkbox' value='篮球' checked={val.indexOf('篮球')!==-1}  onChange={this.change.bind(this)}/>
//        <input type='checkbox' value='波波球' checked={val.indexOf('波波球')!==-1}  onChange={this.change.bind(this)}/>
//         </div>
     
//         </div>
//     )
// }
/*********************下拉*********************/
//受控组件：当表单变化时会被写到state中，这种属于受控组件
// 1.通过state设置默认值
// 2.表单值发生变化时，调用onChnage事件处理器
// 3.事件处理器通过合成事件对象e拿到改变后的状态，并更新state
// 4.setstate触发视图更新，完成表单组件的更新
// 5.表单重要的几个属性：vlaue checked selected
// 6.若<option value='beijing'>北京</option>  先找beijing