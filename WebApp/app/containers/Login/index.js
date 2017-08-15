import React, {Component} from 'react';
import HeaderComponent from "../../components/HeaderComponent/index";
import {connect} from 'react-redux'
//拿到所有actionCreator对象
import * as Actions from '../../actions/userInfo'
import LoginComponent from "../../components/LoginComponent/index";
import {bindActionCreators} from 'redux'
class Login extends Component {
    constructor() {
        super();
        this.state = {login: false}//默认不显示登录组件
    }

    componentDidMount() {
        this.checkLogin()
    }

    //登录的方法，把用户名存到redux里
    login(username) {
        let info=this.props.userInfo;
        info.username=username;
        //更新redux的state
        this.props.userActions.update(info);
    //    登录成功    如果是从购买页登录的 那么登录后回到购买页
        if(this.props.match.params.route){
            this.props.history.push(decodeURIComponent(this.props.match.params.route))
        }else{
            //没指定页面 默认调回用户也
            this.props.history.push('/user')

        }
    }

    //检查是否登录 在redux里 state.UserInfo 是否有username属性 有就是登陆过
    checkLogin() {
        if (this.props.userInfo.username) {
            return this.props.history.push('/user')
        }
        this.setState({login: true})
    };

    render() {
        return (
            <div>
                <HeaderComponent title='登录' history={this.props.history}/>
                {this.state.login ? <LoginComponent login={this.login.bind(this)}/> : <div></div>}

            </div>
        )
    }
}
export default connect(
    state => {
        return {userInfo: state.userInfo}
    },
    dispatch => {
        return {userActions: bindActionCreators(Actions, dispatch)}
    }
)(Login)



