import React, { Component }  from 'react';
import Child from './Child';
import {Button} from 'antd';
import 'antd/lib/button/style'; 


import './index.less'

export default class Life extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
        this.handleCount = this.handleCount.bind(this)
    }
    handleCount(){
        this.setState({
            count: this.state.count+1
        })
    }
    render(){
        return (
            <div className="content">
                <p>React 生命周期展示 【父组件】</p>
                <Button onClick={this.handleCount}>Click</Button>
                <p>----------------------------</p>
                <Child name="KONGJIEYU" count={this.state.count}></Child>
            </div>
        )
    }
}