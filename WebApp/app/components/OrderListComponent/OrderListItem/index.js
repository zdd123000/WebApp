import React,{Component} from 'react';
import './index.less'
export default class OrderListItem extends Component{
    constructor(props){
        super(props);
        //将属性转为状态
        this.state={commentState:props.data.commentState}
    }
    changCommentState(){
        this.setState({//改变评价状态
                commentState:1
    })
    }
    cancel(){
        this.setState({
            commentState:0
        })
    }
    changeState(){
        this.setState({
            commentState:2
        })
    }
    sureCommit(){
this.props.commitComment(this.props.data.id,this.commit.value,this.changeState.bind(this))
    }
    render(){
        let {id,commentState,img,title,count,price}=this.props.data;
        return (
            <div>
                <div className="order-list-item">
                    <div>
                        <img src={img} alt=""/>
                    </div>
                    <div className="list-content">
                        <h3>商户：{title}</h3>
                        <span>数量：{count}</span>
                        <span>价格￥{price}</span>
                    </div>
                    <div className="order-btn">
                        {
                            this.state.commentState===0? <button  onClick={this.changCommentState.bind(this)}>评价</button>:this.state.commentState===1?'':<button className="unselect">已评价</button>
                        }
                    </div>
                </div>
                {
                    this.state.commentState===1?
                        <div className="comment-area">
                        <textarea ref={ref=>this.commit=ref}></textarea>
                            <div>
                                <button onClick={this.sureCommit.bind(this)}>确认评价</button>
                                <button onClick={this.cancel.bind(this)}>取消</button>
                            </div>
                    </div>:''
                }

            </div>
        )
    }
}