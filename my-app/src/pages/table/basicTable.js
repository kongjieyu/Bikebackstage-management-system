import React, { Component }  from 'react';
import { Card, Table } from 'antd'
import axios from './../../axios/index'
// import axios from 'axios'

const { Column, ColumnGroup } = Table;
export default class BasicTable extends React.Component{
    state={
        dataSource2:[]
    }

    params = {
        page:1
    }

    componentDidMount(){
        const data = [
            {
                id:'0',
                userName:'Jack',
                sex:'1',
                state:'1',
                interest:'1',
                birthday:'2000-01-01',
                address:'北京市海淀区奥林匹克公园',
                time:'09:00'
            },
            {
                id: '1',
                userName: 'Tom',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
            {
                id: '2',
                userName: 'Lily',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
            },
        ]
        data.map((item,index)=>{
            item.key = index;
        })
        this.setState({
            dataSource: data
        })
        //获取mock数据
        this.request();
    }
    request = () => {
        // let baseUrl = 'https://www.easy-mock.com/mock/5c79ce273198586d15fdff04/mockapi'
        // axios.get(baseUrl+'/table/list')
        //     .then((res) => {
        //         console.log(res.status)
        //         if(res.status == '200' && res.data.code == 0){
        //             console.log(JSON.stringify(res));
        //             this.setState({
        //                 dataSource2: res.data.result
        //             })
        //         }
                
        //     })
        //     .catch((err)=>{
        //         console.log(JSON.stringify(err));
        //     });
        axios.ajax({
            url: '/table/list',
            data: {
                params:{
                    page:1
                }
            }
        }).then((res)=>{
            if(res.code ==0){
                console.log(JSON.stringify(res))
                this.setState({
                    dataSource2: res.result
                })
            }
        })
    }
    render(){
        const columns = [
            {
                title:'id',
                key:'id',
                dataIndex:'id'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                render(sex){
                    return sex ==1 ?'男':'女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                render(state){
                    let config  = {
                        '1':'咸鱼一条',
                        '2':'风华浪子',
                        '3':'北大才子',
                        '4':'百度FE',
                        '5':'创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                render(abc) {
                    let config = {
                        '1': '游泳',
                        '2': '打篮球',
                        '3': '踢足球',
                        '4': '跑步',
                        '5': '爬山',
                        '6': '骑行',
                        '7': '桌球',
                        '8': '麦霸'
                    }
                    return config[abc];
                }
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday'
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address'
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time'
            }
        ]
        // const selectedRowKeys = this.state.selectedRowKeys;
        // const rowSelection = {
        //     type:'radio',
        //     selectedRowKeys
        // }
        // const rowCheckSelection = {
        //     type: 'checkbox',
        //     selectedRowKeys,
        //     onChange:(selectedRowKeys,selectedRows)=>{
        //         this.setState({
        //             selectedRowKeys,
        //             selectedRows
        //         })
        //     }
        // }

        return(
            <div>
                <Card title="基础表格">
                    <Table 
                        rowKey="uid"
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{margin:'10px 0'}}>
                    <Table
                        rowKey="uid"
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
            </div>
        )
    }
}