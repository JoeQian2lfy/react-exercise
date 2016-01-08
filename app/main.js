/*
React的语法真他妈鸡巴！
哔了狗的语法高亮！
*/

import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

ReactDOM.render(<Hello />,document.getElementById('app'));
ReactDOM.render(<p>test</p>,document.getElementById('test'));

var tmpArr = ["test01","test02","test03"];

ReactDOM.render(
    <div>
        {
            tmpArr.map(name => <h3>{name}</h3>)
        }
    </div>,
    document.getElementById("name")
);

var tmpArr2 =[
    <span>1</span>,
    <span>2</span>,
    <span>3</span>
];

ReactDOM.render(
    <p>{tmpArr2}</p>,
    document.querySelector("#tmpArr2")
);

var HelloMessage = React.createClass({
    render: function() {
        return <h1>Hello {this.props.name}</h1>;
    }
});

ReactDOM.render(
    <HelloMessage name="邱秋桂" />,
    document.querySelector("#hello")
);

var NodeList = React.createClass({
    render: function() {
        return (
            <ul>
                {
                    this.props.children.map(child => <li>{child}</li>)
                }
            </ul>
        )
    }
});

ReactDOM.render(
    <NodeList>
        <i>child1</i>
        <i>child2</i>
    </NodeList>,
    document.querySelector("#node-list")
);
