 'use strict'
//
// var component = require('./component.js');
//
// document.body.appendChild(component());


import React from 'react';
import ReactDOM from 'react-dom';
import Hello from './component.jsx';

main();
var myDivElement = React.createClass({
    render:function() {
        return (
            <div>
                <p>钱程</p>
            </div>
        );
    }
});
ReactDOM.render(<myDivElement />,document.getElementById('test'));


function main() {
    ReactDOM.render(<Hello />,document.getElementById('app'));
}
