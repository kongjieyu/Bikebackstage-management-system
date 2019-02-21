import React, { Component }  from 'react';

export default class Child extends Component{
    constructor(props){
        super(props);
        this.state = {
            count: 0
        }
    }

    componentWillMount(){
        console.log('will mount')
    }

    componentDidMount(){
        console.log('Did mount')
    }
        
    componentWillReceiveProps(newProps){
        console.log('Will Receive Props' + ' ' + newProps.name + ' ' + newProps.count)
    }

    shouldComponentUpdate(nextProps){
        if(nextProps.count<3){
            return false
        } else {
            console.log('should update')
            return true
        }
    }

    componentWillUpdate() {
        console.log('will update')
    }
    
    componentDidUpdate() {
        console.log('did update')
    }


    render(){
        return (
            <div>
                <p>子组件【生命周期展示】</p>
                <p>Props中带有值： {this.props.name} {this.props.count}</p>
            </div>
        )
    }
}