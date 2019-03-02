import React, { Component }  from 'react';
import { Card, Form, Input, Button, message, Icon, Checkbox } from 'antd'
const FormItem = Form.Item;

class FormLogin extends Component{
    constructor(props){
        super(props);
        this.state = {}
    }
    handleSubmit = ()=>{
        //this.props.form是获取当前的表单
        //getFieldsValue()可以获取当前表单的value
        //然后把这个obj对象赋给userInfo
        let userInfo = this.props.form.getFieldsValue();
        //去校验字段
        this.props.form.validateFields((err,values)=>{
            if(!err){
                message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
            }
        })
    }
    render(){
        //getFieldDecorator用于表单的封装， js属性对象
      const {getFieldDecorator, getFieldsError, getFieldError, isFieldTouched} = this.props.form;
        return(
            <div>
                <Card title="登陆行内表单">
                    <Form layout="inline">
                        <FormItem>
                            <Input placeholder="请输入用户名"/>
                        </FormItem>
                        <FormItem>
                                <Input placeholder="请输入密码" />
                        </FormItem>
                        <FormItem>
                            <Button type="primary">登录</Button>
                        </FormItem>
                    </Form>
                </Card>
                <Card title="登陆行内表单" style={{marginTop:10}}>
                    <Form style={{width: 300}}>
                        <FormItem>
                            {getFieldDecorator('userName', {
                                initialValue: 'May',
                                rules: [{ 
                                    required: true, 
                                    message: 'Please input your username!' },
                                        {
                                            min:3,max:10,
                                            message:'长度不在范围内'
                                        },
                                        {
                                            pattern:new RegExp('^\\w+$','g'),
                                            message:'用户名必须为字母或者数字'
                                        }],
                                    })(
                                    <Input prefix={<Icon type="user"/>} placeholder="请输入用户名"/>
                                    )}
                        </FormItem>
                        <FormItem>
                            {getFieldDecorator('userPwd', 
                                {
                                initialValue: '123456',
                                rules: [{ 
                                    required: true, 
                                    message: 'Please input your Password!' }],
                                })
                                (
                                <Input  prefix={<Icon type="lock" />} placeholder="请输入密码" />
                                )}
                        </FormItem>
                        <FormItem>
                            {
                                getFieldDecorator('remember', {
                                    valuePropName:'checked',
                                    initialValue: true
                                })(
                                    <Checkbox>记住密码</Checkbox>
                                )
                            }
                            <a href="#" style={{float:'right'}}>忘记密码</a>
                        </FormItem>
                        <FormItem>
                            <Button type="primary" onClick={this.handleSubmit}>登录</Button>
                        </FormItem>
                    </Form>
                </Card>
            </div>
        )
    }
}
export default Form.create()(FormLogin);