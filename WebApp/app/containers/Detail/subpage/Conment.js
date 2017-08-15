import React,{Component} from 'react';
import {getComment} from '../../../fetch/detail'
import CommentComponent from "../../../components/CommentComponent/index";
import LoadMore from "../../../components/ListComponent/LoadMore/index";
export default class Conment extends Component{
    constructor(){
        super();
        this.state={
            page:0,
            data:[],
            hasMore:true,
            isLoad:true
        }
    }
    render(){
        return (
            <div>
                {
                    this.state.data.length? <CommentComponent data={this.state.data}/>:<div>正在加载</div>

                }
                <LoadMore isLoad={this.state.isLoad}
                           hasMore={this.state.hasMore}
                          loadMore={this.loadMore.bind(this)}
                />
            </div>
        )
    }
    componentWillMount(){
        this.processData(getComment(this.props.id,0)
        )
    }
    loadMore(){//加载更多的方法
        this.setState({
            isLoad:true,
            page:this.state.page+1,
        },()=>{
            this.processData(getComment(this.props.id,this.state.page))
        })
    }
    processData(result){
        result.then(res=>res.json()).then(({hasMore,data})=>{
            this.setState({
                hasMore,
                data:this.state.data.concat(data),
                isLoad:false
            })
        })
    }
}