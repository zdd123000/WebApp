import React,{Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux'
import CurrentCity from '../../components/CurrentCity'
import * as Actions from '../../actions/userInfo'
import {bindActionCreators} from 'redux'
import ChooseCity from "../../components/ChooseCity/index";
class City extends Component{
    changCity(city){//city代表当前选择城市后的结果
        let oldInfo=this.props.userInfo;//取数据
        oldInfo.cityName=city;//更改城市
        this.props.userActions.update(oldInfo);
        this.props.history.push('/')
    }
    render(){
        return (
            <div>
                <HeaderComponent title="选择城市" history={this.props.history}/>
                <CurrentCity cityName={this.props.userInfo.cityName}/>
                <ChooseCity changCity={this.changCity.bind(this)}/>
            </div>
        )
    }
}
export default connect(
    state=>{
        return {userInfo:state.userInfo}
    },
    dispatch=>{
      return{userActions:bindActionCreators(Actions,dispatch)}
    }
)(City)