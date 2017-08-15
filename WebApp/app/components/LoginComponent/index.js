import React, {Component} from 'react';
import './index.less'
export default class LoginComponent extends Component {
    constructor() {
        super();
        this.state = {val: ''}
    }
    login() {//登录方法
       this.props.login(this.state.val)
    }
    changValue (event) {
        this.setState({val: event.target.value})
    };

    render() {
        return (
            <div className="login-component">
                <input
                    type="text"
                    value={this.state.val}
                    placeholder="请输入用户名"
                    onChange={this.changValue.bind(this)}
                />
                <button onClick={this.login.bind(this)}>登录</button>
            </div>
        )
    }
}