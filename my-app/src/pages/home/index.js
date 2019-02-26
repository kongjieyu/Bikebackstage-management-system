import React, { Component }  from 'react';
import './index.less';

export default class Home extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }

    render(){
        return(
            <div className="home-wrap">
                欢迎来到Imooc后台系统
            </div>
        )
    }
}