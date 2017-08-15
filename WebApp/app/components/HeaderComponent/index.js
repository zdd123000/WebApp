import React,{Component} from 'react';
import './index.less'
export default class HeaderComponent extends Component{
    render(){
        return (
            <div className="back header-component">
                <i onClick={this.back.bind(this)} className="iconfont icon-return"></i>
                <span>{this.props.title}</span>
            </div>
        )
    }
    back(){
        if(this.props.back){
            this.props.history.push(this.props.back)
        }else{
            this.props.history.go(-1)
        }
    }
}