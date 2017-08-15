import React, {Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import Info from "./subpage/Info";
import Conment from "./subpage/Conment";
import Buy from "../Buy/index";
import {connect} from 'react-redux'
import * as Actions from '../../actions/store'
import {bindActionCreators} from 'redux'

class Detail extends Component {
    constructor() {
        super();
        this.state = {isStore: false}
    }

    componentDidMount() {
        let id = this.props.match.params.id;//当前id
        let flag = this.props.store.some(item => item === id);
        if (flag) {
            this.setState({isStore: flag})
        }
    }

    buy() {//购买
        let flag = this.checkLogin();
        if (flag) {
            this.props.history.push('/user')
        } else {
            this.props.history.push('/login/' + encodeURIComponent('/detail/' + this.props.match.params.id))
        }
    }

    store() {//收藏
        let flag = this.checkLogin();
        if(!flag){
            this.props.history.push('/login/'+encodeURIComponent('/detail/'+this.props.match.params.id))
        }
        let id=this.props.match.params.id;
        if(this.state.isStore){//收藏过 则移除
this.props.storeActions.remove(id)
        }else{//添加
this.props.storeActions.add(id)
        }
        this.setState({isStore:!this.state.isStore})
    }

    checkLogin() {
        if (this.props.userInfo.username) {
            return true;
        }
        return false;
    }

    render() {
        // console.log(this.props.match.params.id);
        return (
            <div>
                {/*头*/}
                <HeaderComponent title="项目详情" history={this.props.history}/>
                {/*信息*/}
                <Info id={this.props.match.params.id}/>
                {/*购买收藏*/}
                <Buy isStore={this.state.isStore} buy={this.buy.bind(this)} store={this.store.bind(this)}/>
                {/*评论*/}
                <Conment id={this.props.match.params.id}/>
            </div>
        )
    }
}
export default connect(
    state => {
        return {
            userInfo: state.userInfo,
            store: state.store
        }
    },
    dispatch=>{
        return {
            storeActions:bindActionCreators(Actions,dispatch)
        }
    }
)(Detail)