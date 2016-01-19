import React from 'react';
import { connect } from 'react-redux';
import AddTodo from '../components/addTodo.jsx';
import Todo from '../components/todo.jsx';
import TodoList from '../components/todoList.jsx';
import Footer from '../components/footer.jsx';
import { addTodo, completeTodo, activeTodo, setVisibilityFilter, VisibilityFilters } from '../actions';
import './app.less';

class App extends React.Component {
    render() {
        const { dispatch, visibleTodos, visibilityFilter } = this.props;
        return (
            <div className = 'todoMVC'>
                <h1>TodoMVC</h1>
                <AddTodo
                    onAddClick = {text => dispatch(addTodo(text))}
                    />
                <TodoList
                    todos={this.props.visibleTodos}
                    onTodoClick = {(index, completed) => {
                        completed ? dispatch(activeTodo(index)) : dispatch(completeTodo(index));
                    }}
                />
                <Footer
                    filter={visibilityFilter}
                    onFilterChange={filter => dispatch(setVisibilityFilter(filter))}
                />
            </div>
        );
    }
}

App.propTypes = {
    visibleTodos: React.PropTypes.arrayOf(React.PropTypes.shape({
        index: React.PropTypes.number.isRequired,
        text: React.PropTypes.string.isRequired,
        completed: React.PropTypes.bool.isRequired
    })),
    visibilityFilter: React.PropTypes.oneOf([
        'SHOW_ALL',
        'SHOW_COMPLETED',
        'SHOW_ACTIVE'
    ]).isRequired
}

function selectTodos(todos, filter) {
    switch (filter) {
        case VisibilityFilters.SHOW_ALL:
            return todos;
            break;
        case VisibilityFilters.SHOW_COMPLETED:
            return todos.filter(todo => todo.completed);
            break;
        case VisibilityFilters.SHOW_ACTIVE:
            return todos.filter(todo => !todo.completed);
            break;
        default:
            return todos;
    }
}

function select(state) {
    return {
        visibleTodos: selectTodos(state.todos, state.visibilityFilter),
        visibilityFilter: state.visibilityFilter
    }
}

export default connect(select)(App);
