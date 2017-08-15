import React,{Component} from 'react';
import OrderListItem from "./OrderListItem/index";
export default class OrderListComponent extends Component{
    render(){
        return (
            <div>
                <h2>项目列表</h2>
                {this.props.data.map((item,index)=>(
<OrderListItem key={index} data={item} commitComment={this.props.commitComment}/>
                ))}
            </div>
        )
    }
}