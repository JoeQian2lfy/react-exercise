 'use strict'
//
// var component = require('./component.js');
//
// document.body.appendChild(component());


import React from 'react';
import Hello from './component.jsx';

main();


function main() {
    React.render(<Hello >,document.getElementById('app'));
}
