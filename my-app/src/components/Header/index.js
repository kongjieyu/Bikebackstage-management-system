import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './index.less';
import Utils from '../../utils/utils'
import axios from '../../axios'

export default class Header extends Component {
    // state={}
    constructor(props){
        super(props);
        this.state = {
        }
    }
    componentWillMount(){
        this.setState({
            userName: '孔洁钰1',
        })

        setInterval(()=>{
            let sysTime = Utils.formateDate(new Date().getTime());
            this.setState({
                sysTime
            })
        }, 1000) 
        this.getWeatherAPIData();
    }
    getWeatherAPIData(){
        axios.jsonp({
            url: 'https://www.tianqiapi.com/api/?version=v1'
        }).then((res)=>{
            console.log(res)
            console.log(res.data)
            if(res.data) {
                let data = res.data[0]
                this.setState({
                    weather: data.wea              
                })
            } else {
                console.log('else')
            }
        })
    }
    render(){
        var myDate=new Date()
        
        return (
            
            <div className="header">
                <Row className="header-top">
                    <Col span={24}>
                        <span>欢迎 {this.state.userName}</span>
                        <a href="#">退出</a>
                    </Col>
                </Row>
                <Row className="breadcrumb">
                    <Col span={4} className="breadcrumb-title">
                        首页
                    </Col>
                    <Col span={20} className="weather">
                        <span className="date"> 
                            {this.state.sysTime}
                        </span>
                        <span className="weather-detail">
                            天气： {this.state.weather}
                        </span>
                    </Col>
                </Row>
            </div>
        )
    }
}
