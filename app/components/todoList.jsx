import React from 'react';

export default class TodoList extends React.Component {
    propTypes: {
        onTodoClick: React.PropTypes.func.isRequired,
        todos: React.PropTypes.arrayOf(React.PropTypes.shape({
            text: React.PropTypes.string.isRequired,
            completed: React.PropTypes.bool.isRequired
        }).isRequired).isRequired
    },
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    return (
                        <Todo {...todo}
                            key = {index}
                            onClick = {() => this.props.onTodoClick(index)} />
                    );
                })}
            </ul>
        );
    }
}
