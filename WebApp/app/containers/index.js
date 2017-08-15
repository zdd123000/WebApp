//这个页面的作用是选择显示哪一个路由页面  根组件

import React,{Component} from 'react';
import ReactDOM from 'react-dom'
import RouterMap from '../routes/index'
import {connect} from 'react-redux'
//绑定actionCreactor 组成的对象
import {bindActionCreators } from 'redux'
//获取所有actionCreator 组成的对象
import * as Actions from  '../actions/userInfo'
import {getStorage} from '../local'
class App extends Component{
    constructor(){
        super();
        this.state={done:false}
    }
    render(){
        return (
            <div>
                {this.state.done?<RouterMap/>:<div>正在加载</div>
                }
            </div>
        )
    }
    componentDidMount(){//加载完成  现在本地查找是否储存过localStorge 名字叫cityName的
        //1.没有cityName，赋予一个默认值  2.将城市存放到redux
        let cityName=getStorage('cityName');
        if(cityName==null){
            cityName='北京'
        }
        //页面加载后设置一个城市
        this.props.userActions.update({
            cityName
        })
        this.setState({done:true})
        console.log(this.props.userActions);
    }
}
export default connect(
    state=>{//mapStateToProps
        return{}
    },
    dispatch=>{//mapDispatchToProps
        return{
            userActions:bindActionCreators(Actions,dispatch)
        }
    }
)(App)