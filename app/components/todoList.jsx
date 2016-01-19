import React from 'react';
import Todo from './todo.jsx';

export default class TodoList extends React.Component {
    render() {
        return (
            <ul>
                {this.props.todos.map((todo, index) => {
                    return (
                        <Todo {...todo}
                            key = {index}
                            onTodoClick = {() => this.props.onTodoClick(index)} />
                    );
                })}
            </ul>
        );
    }
}

TodoList.propTypes = {
    onTodoClick: React.PropTypes.func.isRequired,
    todos: React.PropTypes.arrayOf(React.PropTypes.shape({
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    }).isRequired).isRequired
}
