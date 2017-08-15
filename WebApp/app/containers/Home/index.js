import React, {Component} from 'react';
import HomeHeader from "../../components/HomeHeader/index";
import Slider from "../../Slider/Slider";
import Ad from "./subpage/Ad";
import {connect} from 'react-redux'
import List from "./subpage/List";
class Home extends Component {
    render() {
        return (
            <div>
                <HomeHeader history={this.props.history}  cityName={this.props.userInfo.cityName}/>
                <Slider/>
                <Ad/>
                <List cityName={this.props.userInfo.cityName}/>
            </div>
        )
    }
}
//去除redux 中城市传递给HomeHeader组件
//链接redux
export default connect(
    state => {
        return {userInfo: state.userInfo}//拿出redux state中userInfo的数据给变量userInfo
    }
)(Home)