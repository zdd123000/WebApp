import React,{Component} from 'react';
import './index.less'
export default class ChooseCity extends Component{
    render(){
        return (
            <div className="_city">
                <h3>热门城市</h3>
                <ul>
                    <li onClick={this.props.changCity.bind(this,'北京')}>北京</li>
                    <li onClick={this.props.changCity.bind(this,'上海')}>上海</li>
                    <li onClick={this.props.changCity.bind(this,'深圳')}>深圳</li>
                    <li onClick={this.props.changCity.bind(this,'杭州')}>杭州</li>
                    <li onClick={this.props.changCity.bind(this,'黑龙江')}>黑龙江</li>
                    <li onClick={this.props.changCity.bind(this,'河北')}>河北</li>
                </ul>
            </div>
        )
    }
}