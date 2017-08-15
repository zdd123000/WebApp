import React, {Component} from 'react';
import Star from "../../Star/index";
import './index.less'

export default class CommentItem extends Component {
    render() {
        let {username, comment, star} = this.props.data;
        return (
            <div className="comment-item">
                <div>
                    <i className="iconfont icon-group_fill"></i>
                    {username}
                </div>
                <div>
                    <Star count={star}/>
                </div>
                <div>
                    {comment}
                </div>
            </div>
        )
    }
}