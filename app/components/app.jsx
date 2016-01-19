import React from 'react';
import AddTodo from './addTodo.jsx';
import Todo from './todo.jsx';
import TodoList from './todoList.jsx';
import Footer from './footer.jsx';

export default class App extends React.Component {
    render() {
        return (
            <div>
                <AddTodo
                    onAddClick = {text => console.log('addTodo', text)}
                    />
                <TodoList
                    todos={[{
                        text: 'Use Redux',
                        completed: true
                      }, {
                        text: 'Learn to connect it to React',
                        completed: false
                      }]}
                    onTodoClick = {todo => console.log('todo click', todo)}
                />
                <Footer
                    filter='SHOW_ALL'
                    onFilterChange={filter => console.log('filter change', filter)}
                />
            </div>
        );
    }
}
