/*
React的语法真他妈鸡巴！
哔了狗的语法高亮！
*/

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

//config app root
const Root = (
    <Provider store={store}></Provider>
)

//render
ReactDOM.render(
    <Root />,
    document.querySelector("#root");
);
