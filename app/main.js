 'use strict'
//
// var component = require('./component.js');
//
// document.body.appendChild(component());


import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

//chrome自带$选择器

ReactDOM.render(<Hello />,document.getElementById('app'));
ReactDOM.render(<p>test</p>,document.getElementById('test'));

var tmpArr = ["钱程","邱秋桂","宣炎"];

ReactDOM.render(
    <div>
        {
            tmpArr.map(name => <h2>你好，{name}</h2>)
        }
    </div>,
    document.getElementById("name")
);
