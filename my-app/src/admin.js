import React, { Component } from 'react';
import {Row, Col} from 'antd';
//不需要写到文件名，默认就加载index
import Header from './components/Header';
import Footer from './components/Footer';
export default class Admin extends Component {
    render(){
        return(
            <Row>
                <Col span={6}>
                    Left
                </Col>
                <Col span={9}>
                    
                    <Header></Header>
                    <Row>
                        Right
                    </Row>
                    <Footer>

                    </Footer>
                </Col>
            </Row>
        )
    }
}