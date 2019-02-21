import React, { Component }  from 'react';
import Child from './Child'

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
            <div>
                <p>React 生命周期展示 【父组件】</p>
                <button onClick={this.handleCount}>Click</button>
                <p>----------------------------</p>
                <Child name="KONGJIEYU" count={this.state.count}></Child>
            </div>
        )
    }
}