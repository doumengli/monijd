import React, { Component} from 'react';
import Head from '../../components/My/Head'
import Navs from '../../components/My/Navs'
import Main from '../../components/My/Maindl'
export default class Mine extends Component{
    render () {
        return (
            <React.Fragment>
            <Head/>
            <Navs/>
            <Main/>
            </React.Fragment>
        )
    }
}
