import React,{Component} from 'react';
import './index.less'
export default class UserInfo extends Component{
    render(){
        return (
            <div className="userInfo">
                <span>用户名：{this.props.userInfo.username}</span>
                <span>城市：{this.props.userInfo.cityName}</span>
            </div>
        )
    }
}