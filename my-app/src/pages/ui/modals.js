import React, { Component }  from 'react';
import { Card, Button, Radio, size, Modal } from 'antd';
import './ui.less'

export default class  Modals extends Component{
    constructor(props){
        super(props);
        this.state = {
            showModal1: false,
            showModal2: false,
            showModal3: false,
            showModal4: false
        }
    }

  showModal = (type) => {
    this.setState({
      [type]: true,
    });
  }

  handleOk = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }

  handleCancel = (e) => {
    console.log(e);
    this.setState({
      visible: false,
    });
  }
    render(){
        return(
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() =>this.showModal('showModal1')}>Open</Button>
                    <Button>自定义页脚</Button>
                    <Button>顶部20px弹窗</Button>
                    <Button>水平垂直居中</Button>
                </Card>

                <Modal
                    title="Basic Modal"
                    visible={this.state.showModal1}
                    onOk={()=>{
                        console.log('ok')
                        this.setState({
                            showModal1:false
                        })
                    }}
                    onCancel={()=>{
                        console.log('Cancel')
                        this.setState({
                            showModal1:false
                        })
                    }}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                 <Modal
                    title="Basic Modal"
                    visible={this.state.showModal2}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}