import React, { Component } from 'react';
import menuList from './../../config/menuConfig'
import { Menu, Icon } from 'antd';
import { NavLink } from 'react-router-dom';

const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;

export default class NavLeft extends Component {
    componentWillMount(){
        const meunTreeNode = this.renderMenu(menuList);
        this.setState({
            meunTreeNode
        })
    }
    renderMenu = (data) =>{
        return data.map((item)=>{
            if(item.children){
                return (
                    <SubMenu title={item.title} key={item.key}>
                        {this.renderMenu(item.children)}
                    </SubMenu>
                )
            }
            return <Menu.Item  title={item.title} key={item.key}>
                    <NavLink to={item.key}>{item.title}</NavLink>
                </Menu.Item>
            
        })
    }
    render(){

        return (
            <div>
                <div>
                    <h1 className="title">IMOOC</h1>
                </div>
               <Menu theme="dark">
                    {this.state.meunTreeNode}
               </Menu>
            </div>
        )
    }
}
