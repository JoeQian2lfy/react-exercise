/*
React的语法真他妈鸡巴！
哔了狗的语法高亮！
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

ReactDOM.render(<Hello />,document.getElementById('app'));//从其他jsx import进来
ReactDOM.render(<p>test</p>,document.getElementById('test'));//最简单的写法

/*
var tmpArr = ["test01","test02","test03"];

ReactDOM.render(
    <div>
        {
            tmpArr.map(name => <h3>{name}</h3>)
        }
    </div>,
    document.getElementById("name")
);//JSX遇到<>为html,遇到{}为js

var tmpArr2 =[
    <span>1</span>,
    <span>2</span>,
    <span>3</span>
];
//html数组
ReactDOM.render(
    <p>{tmpArr2}</p>,
    document.querySelector("#tmpArr2")
);

//html组件
//this.props接收参数
var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDOM.render(
    <HelloMessage name="邱秋桂" />,
    document.querySelector("#hello")
);
*/

//接收children
var NodeList = React.createClass({
    render: function() {
        return (
            <ul>
                {
                    //this.props.children为一个时是Object，多个为数组
                    //React提供了React.Children.Map来避免问题
                    //this.props.children.map(child => <li>{child}</li>)
                    //上面的写法万一children为一个时会出错
                    React.Children.map(this.props.children, child => <li>{child}</li>)
                }
            </ul>
        )
    }
});

ReactDOM.render(
    <NodeList>
        <i>child1</i>
    </NodeList>,
    document.querySelector("#node-list")
);

//组件属性默认值和判断
var DefaultNode = React.createClass({
    //设置默认属性
    getDefaultProps: function() {
        return {
            title: "默认title"
        }
    },
    //属性判断
    propTypes: {
        title: React.PropTypes.string.isRequired
    },
    render: function() {
        return <h1>{this.props.title}</h1>;
    }
});

ReactDOM.render(
    <DefaultNode title="非默认Title" />,
    document.querySelector("#default-prop")
);

//组件的状态
var LikeButton = React.createClass({
    //初始化state
    getInitialState: function() {
        return {liked: false};
    },
    handleClick: function(event) {
        //setState后会执行this.render()
        this.setState({liked: !this.state.liked});
    },
    render: function() {
        let text = this.state.liked ? "喜欢" : "不喜欢";
        return (
            <p onClick={this.handleClick}>
                我{text},点击切换
            </p>
        );
    }
});

ReactDOM.render(
    <LikeButton />,
    document.querySelector("#like")
);
