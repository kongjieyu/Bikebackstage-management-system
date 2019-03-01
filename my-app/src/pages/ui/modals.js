import React, { Component }  from 'react';
import { Card, Button, Radio, size, Modal } from 'antd';
import './ui.less'

// function success() {
//   Modal.success({
//     title: 'This is a success message',
//     content: 'some messages...some messages...',
//   });
// }

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

//   handleOk = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   }

//   handleCancel = (e) => {
//     console.log(e);
//     this.setState({
//       visible: false,
//     });
//   }
    handleConfirm = (type)=>{
        Modal[type]({
            title:'确认？',
            content:'你确定你学会了React了吗？',
            onOk(){
                console.log('Ok')
            },
            onCancel(){
                console.log('Cancel')
            }
        })
    }

    render(){
        return(
            <div>
                <Card title="基础模态框" className="card-wrap">
                    <Button type="primary" onClick={() =>this.showModal('showModal1')}>Open</Button>
                    <Button type="primary" onClick={() =>this.showModal('showModal2')}>自定义页脚</Button>
                    <Button type="primary" onClick={() =>this.showModal('showModal3')}>顶部20px弹窗</Button>
                    <Button type="primary" onClick={() =>this.showModal('showModal4')}>水平垂直居中</Button>
                </Card>
                 <Card title="信息确认框" className="card-wrap">
                    <Button type="primary" onClick={() => this.handleConfirm('confirm')}>Confirm</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('info')}>Info</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('success')}>Success</Button>
                    <Button type="primary" onClick={() => this.handleConfirm('warning')}>Warning</Button> 
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
                    title="React"
                    visible={this.state.showModal2}
                    okText="好的"
                    cancelText="算了"
                    onOk={()=>{
                        console.log('ok')
                        this.setState({
                            showModal2:false
                        })
                    }}
                    onCancel={() => {
                        this.setState({
                            showModal2: false
                        })
                    }}
                >

                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                 <Modal
                    title="20px to the top Modal"
                    style={{ top: 20 }}
                    visible={this.state.showModal3}
                    onOk={()=>{
                        console.log('ok')
                        this.setState({
                            showModal3:false
                        })
                    }}
                    onCancel={()=>{
                        console.log('Cancel')
                        this.setState({
                            showModal3:false
                        })
                    }}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
                 <Modal
                    title="Vertically centered modal dialog"
                    centered
                    visible={this.state.showModal4}
                    onOk={()=>{
                        console.log('ok')
                        this.setState({
                            showModal4:false
                        })
                    }}
                    onCancel={()=>{
                        console.log('Cancel')
                        this.setState({
                            showModal4:false
                        })
                    }}
                >
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                    <p>Some contents...</p>
                </Modal>
            </div>
        )
    }
}