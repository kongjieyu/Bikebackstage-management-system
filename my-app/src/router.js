import React, { Component } from 'react';
import { HashRouter, Route, Switch } from 'react-router-dom';

import App from './App'
import Login from './pages/login';
import Buttons from './pages/ui/buttons';
import NoMatch from './pages/nomatch';
import Admin from './admin'
export default class IRouter extends Component {
    render(){
        return (
            <HashRouter>
                <App>
                    <Route path="/login" component={Login}/>
                    {/* Admin 下还有嵌套路由*/}
                    <Route path="/admin" render={()=>
                        <Admin>
                            <Route path="/admin/ui/buttons" component={Buttons}/>
                            <Route component={NoMatch}/>
                        </Admin>
                    }/>
                    <Route path="/order/detail" component={Login}/>
                </App>
            </HashRouter>
        )
    }
}