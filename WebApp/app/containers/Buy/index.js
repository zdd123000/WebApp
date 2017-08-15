import React,{Component} from 'react';
import './index.less'
export default class Buy extends Component{
    buy(){
        this.props.buy()
    }
    store(){
        this.props.store()
    }
    render(){
        return (
            <div className="buy">
                <button onClick={this.store.bind(this)}>{this.props.isStore?"已收藏":"收藏"}</button>
                <button onClick={this.buy.bind(this)}>预定</button>
            </div>
        )
    }
}