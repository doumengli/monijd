import React, {Component} from 'react'
import { Tabs, WhiteSpace } from 'antd-mobile';
import './style.css'
export default class Navs extends Component{
  constructor(props){
    super(props)
    this.state={
      value:props.value
    }
  }
  hq(){
    alert(11)

  }
  val(e){
    this.setState({
      value:e.target.value
    })
    // console.log(this.state.value)
  }
    render(){
        const tabs = [
            { title: '账号密码登录' },
            { title: '短信验证登录' }          
          ];
          const {value} = this.state
           return(
               <div className='dldx'>
               <WhiteSpace />
               <Tabs tabs={tabs} initialPage={2} animated={false} useOnPan={true}>
                 <div style={{ display: 'flex', backgroundColor: '#fff' }}>
                  <div className='dly'>
                  <h3> 账号<input placeholder='用户名/邮箱/已验证手机'/></h3><br/>
                  <h3> 密码<input placeholder='请输入密码'/></h3>
                  </div>
                 </div>
                 <div style={{ display: 'flex',  justifyContent: 'center',  backgroundColor: '#fff' }}>
                 <div className='dly'>
                 <h3> +86<input placeholder='请输入手机号' value={this.state.value} onChange={e=>this.val(e) }/><span onClick={this.hq.bind(this)}>获取验证码</span></h3><br/>
                 <h3>请输入收到的验证码 </h3>
                 </div>
                 </div>           
               </Tabs>
               <WhiteSpace />
             </div>
       
           )
    }
}