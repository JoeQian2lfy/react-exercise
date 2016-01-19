import React from 'react';

export default class AddTodo extends React.Component {
    propTypes: {
        onAddClick: React.PropTypes.func.isRequired
    },
    handleClick(e) {
        const node = React.findDOMNode(this.refs.input);
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    },
    render() {
        return (
            <div>
                <input type="text" ref="input /">
                <button onClick="{e => handleClick(e)}">
                    Add
                </button>
            </div>
        );
    }
}
