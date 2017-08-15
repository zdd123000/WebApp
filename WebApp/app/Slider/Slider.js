import React, {Component} from 'react';
import './Slider.less'
import ReactSwipe from 'react-swipe'
import {Link} from 'react-router-dom'
export default class Slider extends Component {
    constructor() {
        super();
        this.state = {
            index: 0
        }
    }

    render() {
        let opts = {
            continuous: false,
            callback: (index) => {//判断索引 焦点滚动
                this.setState({
                    index
                })
            }
        }
        return (
            <div>
                <ReactSwipe className="carousel" swipeOptions={opts}>
                    <div>
                        <ul>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-biyan"></i>
                                    <span>眼部</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-bizi"></i>
                                    <span>鼻部</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-xiongbu"></i>
                                    <span>丰胸</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-shenti"></i>
                                    <span>吸脂</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-quban"></i>
                                    <span>祛斑</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-maofa"></i>
                                    <span>毛发移植</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-tuomaofuwu"></i>
                                    <span>超导脱毛</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-qudou"></i>
                                    <span>祛痘</span>
                                </li>
                            </Link>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-weiyizhengxing-wuchuang-"></i>
                                    <span>微整形</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-zitizhifangtianchong"></i>
                                    <span>自体脂肪</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-wenxiu"></i>
                                    <span>医学纹绣</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-yachijiaozheng"></i>
                                    <span>牙齿矫正</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-weiyizhengxing-wuchuangchuzhou-"></i>
                                    <span>瘦脸除皱</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-chanhouhuifu"></i>
                                    <span>产后修复</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-boniaosuan"></i>
                                    <span>玻尿酸</span>
                                </li>
                            </Link>
                            <Link to="/serch/jingdian">
                                <li>
                                    <i className="iconfont icon-icon"></i>
                                    <span>音波提拉</span>
                                </li>
                            </Link>
                        </ul>
                    </div>



                </ReactSwipe>
                <ul className="Dots">
                    <li className={this.state.index == 0 ? 'active' : ''}></li>
                    <li className={this.state.index == 1 ? 'active' : ''}></li>
                    {/*<li className={this.state.index == 2 ? 'active' : ''}></li>*/}
                </ul>
            </div>

        )
    }
}