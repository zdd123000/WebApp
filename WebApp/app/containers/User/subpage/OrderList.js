import React, {Component} from 'react';
import {getOrderList,postComment}from '../../../fetch/orderList'
import OrderListComponent from "../../../components/OrderListComponent/index";
export default class OrderList extends Component {
    constructor() {
        super();
        this.state = {data: []}
    }
    componentDidMount(){
        getOrderList(this.props.username).then(res => res.json()).then(data => {
            console.log(data);
            this.setState({data})
        })
    }
    //提交评价到后台
    commitComment(id,comment,callback){
       postComment({id,comment}).then(res=>res.json()).then(data=>{
           callback()
       })
    }
    render() {
        return (
            <div>
                {this.state.data.length ? <OrderListComponent data={this.state.data} commitComment={this.commitComment.bind(this)}/> : <div>正在加载中</div>}
            </div>
        )
    }
}