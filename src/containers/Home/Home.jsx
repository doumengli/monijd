import React, { Component} from 'react';
import axios from 'axios';
import * as homeActionCreater from '../../store/actions/home'
import {connect} from 'react-redux';
import { bindActionCreators } from 'redux';
import List from '../../components/Home/List'; // 渲染内容
import Header from '../../components/Home/Header';
import Lb from '../../components/Home/Lb';
 class Home extends Component{
    componentDidMount () {
        const {homeAction} = this.props;
        axios.get('/list')
            .then((res) => {
                const jdList = res.data;  
                if(jdList.code != 0) return;
            homeAction.getJdList(jdList.wareInfoList)
        })
        .catch((e) => {
            throw Error(`搜索:${e}`)
        })
    }  
    render () {
      const {jdList} = this.props;
      return (
          <div className='sect'>
         <Header/>
         <Lb/>
          <div className='dls'>
            {
                jdList !==null &&jdList.map((item,idx)=>{
                    return (<List
                            key={idx}
                            titles={item}
                            />)
                })
            }
         </div>
     
        </div>
    )
    }
}
const mapStateToProps = (state) => {
    return {
        jdList:state.home.jdList
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
       homeAction : bindActionCreators(homeActionCreater, dispatch)
    }
}

export default connect (mapStateToProps,mapDispatchToProps)(Home)


