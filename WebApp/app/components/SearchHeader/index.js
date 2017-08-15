import React,{Component} from 'react';
import SearchInput from "../SearchInput/index";
import './index.less'
export default class SearchHeacer extends Component{
    back(){
        this.props.history.go(-1)
    }
    render(){
        return (
            <div className="back search-header">
                <i
                    className="iconfont icon-return"
                    onClick={this.back.bind(this)}
                ></i>
                <div>
                    <SearchInput
                        value={this.props.value}
                        fn={this.props.fn}
                    />
                </div>

            </div>
        )
    }
}