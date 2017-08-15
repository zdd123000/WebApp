import React, {Component} from 'react';
import {getList} from '../../../fetch/home'
import ListComponent from "../../../components/ListComponent/index";
import LoadMore from "../../../components/ListComponent/LoadMore/index";
export default class List extends Component {
    constructor() {
        super();
        this.state = {
            hasMore: true,//是否更多
            data: [],//所有数据
            page:0,//页码
            isLoad:true
        }
    }

    render() {
        return (
            <div>
                {this.state.data.length ? <ListComponent data={this.state.data} /> : <div>正在加载</div>}
                <LoadMore hasMore={this.state.hasMore}
                          loadMore={this.loadMore.bind(this)}
                          isLoad={this.state.isLoad}
                />
            </div>
        )
    }

    componentDidMount() {
        this.processData(getList(this.props.cityName, 0)
        )
    }
//    需要在当前写一个加载更多很函数，传递给loadMore 当点击按钮触发传递的函数
loadMore(){
        this.setState({
           page: this.state.page+1,
            isLoad:false
        },()=>{
            this.processData(getList(this.props.cityName, this.state.page))
        })
}
//    成功后的逻辑
    processData(result) {
        result.then(res => res.json()).then(({hasMore, data}) => {
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoad:false
            })
        })
    }
}