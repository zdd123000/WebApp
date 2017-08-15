import React,{Component} from 'react';
import {HashRouter as Router,Route,Switch}from 'react-router-dom'
import Home from '../containers/Home'
import Detail from "../containers/Detail/index";
import Login from "../containers/Login";
import User from "../containers/User";
import City from "../containers/City";
import Search from "../containers/Search";
export default class RouterMap extends Component{
    render(){
        return (
            <div>
                <Router>{/*Router 目录下必须是唯一的*/}
                    <Switch>
                        <Route exact path="/" component={Home}/>
                        <Route path="/detail/:id" component={Detail}/>
                        <Route path="/login/:route?" component={Login}/>
                        <Route path="/user" component={User}/>
                        <Route path="/city" component={City}/>

                        <Route path="/search/:kind/:keyword?" component={Search}/>
                    </Switch>
                </Router>
            </div>
        )
    }
}