import React, { Component } from 'react';
import { Card, Table, Modal, Button, message } from 'antd'
import axios from './../../axios/index'
// import axios from 'axios'
import Utils from './../../utils/utils'

const { Column, ColumnGroup } = Table;
export default class BasicTable extends React.Component {
    state = {
        dataSource: []
    }
    params = {
        page: 1
    }
    componentDidMount() {
        this.request()
    }

    handleChange = (pagination, filters, sorter) => {
        console.log("!!" + sorter.order)
        this.setState({
            sortOrder: sorter.order
        })

    }

    request = () => {
        let _this = this;
        console.log('..')
        axios.ajax({
            url: '/table/list',
            data: {
                params: {
                    page: this.params.page
                }
                // isShowLoading: false
            }
        }).then((res) => {
            if (res.code == 0) {
                res.result.list.map((item, index) => {
                    item.key = index;
                })
                console.log(JSON.stringify(res))
                this.setState({
                    dataSource: res.result.list,
                    // selectedRowKeys: [],
                    // selectedRows: null,
                    //res返回的是在mock网上定义的所有数据：包括code，模msg， result等
                    // pagination: Utils.pagination(res, (current) => {
                    //     //todo
                    //     console.log(res)
                    //     console.log(current)
                    //     _this.params.page = current;
                    //     this.request();
                    // })
                })
            }
        })
    }
    handleDelete = (item) => {
        console.log('Hey HandleDelete')
        Modal.confirm({
            title: '删除提示',
            content: '你确认要删除这条信息吗？',
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
        return null
    }
    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id',
                width: 60,
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width: 100,
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                width: 100,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                width: 100,
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
                dataIndex: 'birthday',
                width: 100
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: 100,
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width: 100
            }
        ]

        const columns2 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id',
                width: 60,
                fixed: 'left'
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width: 100,
                fixed: 'left'
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                width: 100,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                width: 100,
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
                dataIndex: 'birthday',
                width: 200
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 200
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 200
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 200
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 200
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 200
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 200
            },
            {
                title: '生日',
                key: 'birthday',
                dataIndex: 'birthday',
                width: 200
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: 100,
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width: 100
            }
        ]

        const columns3 = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id',
                width: 60,
            },
            {
                title: '用户名',
                key: 'userName',
                dataIndex: 'userName',
                width: 100,
            },
            {
                title: '性别',
                key: 'sex',
                dataIndex: 'sex',
                width: 80,
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
                width: 100,
                render(state) {
                    let config = {
                        '1': '咸鱼一条',
                        '2': '风华浪子',
                        '3': '北大才子',
                        '4': '百度FE',
                        '5': '创业者'
                    }
                    return config[state];
                }
            },
            {
                title: '爱好',
                key: 'interest',
                dataIndex: 'interest',
                width: 100,
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
                dataIndex: 'birthday',
                width: 100,
                sorter: (a, b) => {
                    console.log('a::' + a.birthday)
                    console.log('b::' + b.birthday)
                    console.log('...')
                    console.log(Date.parse(a.birthday) - Date.parse(b.birthday))
                    return Date.parse(a.birthday) - Date.parse(b.birthday)

                },

                sortOrder: this.state.sortOrder
            },
            {
                title: '地址',
                key: 'address',
                dataIndex: 'address',
                width: 100,
            },
            {
                title: '早起时间',
                key: 'time',
                dataIndex: 'time',
                width: 100
            },
            {   title: 'Action', 
                key: 'operation', 
                render: (item) => <a href="javascript:;" onClick = {(item)=> {this.handleDelete(item)}} >Delete</a> }
        ]


        return (
            <div>
                <Card title="头部固定">
                    <Table

                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ y: 240 }}
                    />
                </Card>
                {/* <Card title="左侧固定" style={{ margin: '10px 0' }}>
                    <Table

                        bordered
                        columns={columns2}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        scroll={{ x: 2240}}
                    />
                </Card> */}
                <Card title="年龄排序+操作按钮" style={{ margin: '10px 0' }}>
                    <Table

                        bordered
                        columns={columns3}
                        dataSource={this.state.dataSource}
                        pagination={false}
                        onChange={this.handleChange}
                    />
                </Card>
            </div>
        )
    }
}