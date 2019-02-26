import React, { Component } from 'react';
import {Row, Col} from 'antd';
import './style/common.less'
//不需要写到文件名，默认就加载index
import Header from './components/Header';
import Home from './pages/home';
import Footer from './components/Footer';
import NavLeft from './components/NavLeft';

export default class Admin extends Component {
    render(){
        return(
            <Row className='container'>
                <Col span={4} className='nav-left'>
                    <NavLeft></NavLeft>
                </Col>
                <Col span={20} className='main'>
                    <Header></Header>
                    <Row className='content'>
                        {this.props.children}
                    </Row>
                    <Footer>
                    </Footer>
                </Col>
            </Row>
        )
    }
}