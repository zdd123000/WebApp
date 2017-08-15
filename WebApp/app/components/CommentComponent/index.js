import React,{Component} from 'react';
import CommentItem from "./CommentItem/index";
export default class CommentComponent extends Component{
    render(){
        return (
            <div>
                {this.props.data.map((item,index)=>(
                    <CommentItem key={index} data={item}/>
                ))}

            </div>
        )
    }
}