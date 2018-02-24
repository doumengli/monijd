import React, { Component } from 'react';
import Heads from '../../components/Detail/Headers'
import XqMain from '../../components/Detail/XqMain'
import Cont from '../../components/Detail/Cont'
import { Router, Route, hashHistory } from 'react-router'
export default class Detail extends Component {
    render() {
        const titles = this.props.location.state
        return (
            <div>
                <Heads />
                <XqMain tit={titles} />
                <Cont />
            </div>
        )
    }
}

