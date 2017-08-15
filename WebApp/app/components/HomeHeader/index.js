import React,{Component} from 'react';
import {Link} from 'react-router-dom'
import './index.less'
import SearchInput from "../SearchInput/index";
//主页头组件
export default class HomeHeader extends Component{
    toSerch(value){
this.props.history.push('/search/all/'+value)
    }

    render(){
        return (
            <div className="home-header back">
                <Link to="/city">
                    <div className="city_">
                        {this.props.cityName}
                        <i className="iconfont icon-unfold">
                        </i>
                    </div>
                </Link>
                <div className="search">
                    <i className="iconfont icon-search"></i>
                    <SearchInput value="" fn={this.toSerch.bind(this)}/>
                </div>
                <Link to="/login">
                    <div className="profile">
                        <i className="iconfont icon-group_fill"></i>
                    </div>
                </Link>



            </div>
        )
    }
}