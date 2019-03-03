import React, { Component } from 'react';
import { Card, Table, Modal, Button, message } from 'antd'
import axios from './../../axios/index'
// import axios from 'axios'
import Utils from './../../utils/utils'

const { Column, ColumnGroup } = Table;
export default class BasicTable extends React.Component {
    state = {
        dataSource2: []
    }

    params = {
        page: 1
    }

    componentDidMount() {
        const data = [
            {
                id: '0',
                userName: 'Jack',
                sex: '1',
                state: '1',
                interest: '1',
                birthday: '2000-01-01',
                address: '北京市海淀区奥林匹克公园',
                time: '09:00'
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
        //为每条记录增加key
        //map的语法array.map(function(currentValue, index, arr), thisValue)
        data.map((item, index) => {
            item.key = index;
        })
        this.setState({
            dataSource: data
        })
        //获取mock数据
        this.request();
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
                    dataSource2: res.result.list,
                    selectedRowKeys: [],
                    selectedRows: null,
                    //res返回的是在mock网上定义的所有数据：包括code，模msg， result等
                    pagination: Utils.pagination(res, (current) => {
                        //todo
                        console.log(res)
                        console.log(current)
                        _this.params.page = current;
                        this.request();
                    })
                })
            }
        })
    }
    onRowClick = (record, index) => {
        //获取选中这行的key值
        let selectKey = [index];
        Modal.info({
            title: '信息',
            content: `用户名：${record.userName},用户爱好：${record.interest}`
        })
        this.setState({
            selectedRowKeys: selectKey,
            selectedItem: record
        })
    }

    handleDelete = (() => {
        console.log('delete')
        let rows = this.state.selectedRows;
        let ids = [];
        console.log(rows)
        console.log(rows.length)
        if (rows.length > 1) {
            rows.map((item) => {
                ids.push(item.id)
            })
        }

        Modal.confirm({
            title: '删除提示',
            content: `你确认要删除这些信息吗 ${ids.join(',')}`,
            onOk: () => {
                message.success('删除成功');
                this.request();
            }
        })
    })


    render() {
        const columns = [
            {
                title: 'id',
                key: 'id',
                dataIndex: 'id'
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
                render(sex) {
                    return sex == 1 ? '男' : '女'
                }
            },
            {
                title: '状态',
                key: 'state',
                dataIndex: 'state',
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
        const selectedRowKeys = this.state.selectedRowKeys;
        //rowSelection用来设置： 单选或者多选
        const rowSelection = {
            type: 'radio',
            //指定选中项的 key 数组，需要和 onChange 进行配合
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
            }
        }

        const rowCheckSelection = {
            type: 'checkbox',
            selectedRowKeys,
            onChange: (selectedRowKeys, selectedRows) => {
                this.setState({
                    selectedRowKeys,
                    selectedRows
                })
                console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows)
            }
        }

        return (
            <div>
                <Card title="基础表格">
                    <Table

                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource}
                        pagination={false}
                    />
                </Card>
                <Card title="动态数据渲染表格-Mock" style={{ margin: '10px 0' }}>
                    <Table

                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock单选" style={{ margin: '10px 0' }}>
                    <Table
                        //onRow支持点击行就可以选中前面的选择框，不需要直接点击选择框
                        //可以接收一个回调函数
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                },
                            };
                        }}
                        rowSelection={rowSelection}

                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock多选" style={{ margin: '10px 0' }}>
                    <Button onClick={this.handleDelete}>
                        删除
                     </Button>
                    <Table
                        //onRow可以接收一个回调函数
                        onRow={(record, index) => {
                            return {
                                onClick: () => {
                                    this.onRowClick(record, index)
                                },
                            };
                        }}
                        rowSelection={rowCheckSelection}
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={false}
                    />
                </Card>
                <Card title="Mock分页" style={{ margin: '10px 0' }}>
                    <Button onClick={this.handleDelete}>
                        删除
                     </Button>
                    <Table
                        bordered
                        columns={columns}
                        dataSource={this.state.dataSource2}
                        pagination={this.state.pagination}
                    />
                </Card>
            </div>
        )
    }
}