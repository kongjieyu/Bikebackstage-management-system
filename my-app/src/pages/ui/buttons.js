import React, { Component }  from 'react';
import { Card, Button, Radio, size } from 'antd';
import './ui.less'

export default class  Buttons extends Component{
    state = {
        loading: true,
        size: 'default',
    }
    handleCloseLoading = () => {
        this.setState({ loading: false });
    }
    handleChange = (e) => {
        this.setState({
            size: e.target.value
        })
    }
    render(){
        return(
            <div>
                <h1>This is Buttons Page</h1>
                <Card className="card-wrap" title="基础按钮" bordered={false}>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
                <Card className="card-wrap" title="基础按钮" bordered={false}>
                    <Button icon="plus">创建</Button>
                    <Button icon="edit">编辑</Button>
                    <Button icon="delete">删除</Button>
                    <Button shape="circle" icon="search"></Button>
                    <Button type="primary" icon="search">搜索</Button>
                    <Button type="primary" icon="download">下载</Button>
                </Card>
                <Card className="card-wrap" title="Loading按钮" bordered={false}>
                    <Button type="primary" loading={this.state.loading}>
                        确定
                    </Button>
                    <Button type="primary" shape="circle" loading={this.state.loading} />
                    <Button loading={true}>
                        点击加载
                    </Button>
                    <Button shape="circle" loading={this.state.loading} />
                    <Button type="primary" onClick={this.handleCloseLoading}>关闭</Button>
                </Card>
                <Card className="card-wrap" title="Radio按钮" bordered={false}>
                    <Radio.Group size={this.state.size} onChange={this.handleChange}>
                        <Radio value="large">Large</Radio>
                        <Radio value="default">Default</Radio>
                        <Radio value="small">Small</Radio>
                    </Radio.Group>
                    <Button type="primary" size={this.state.size}>Size</Button>
                </Card>
                <Card className="card-wrap" title="基础按钮" bordered={false}>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
                <Card className="card-wrap" title="基础按钮" bordered={false}>
                    <Button type="primary">Primary</Button>
                    <Button>Default</Button>
                    <Button type="dashed">Dashed</Button>
                    <Button type="danger">Danger</Button>
                </Card>
            </div>
        )
    }
}