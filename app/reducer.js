import { combineReducers } from 'redux';
import { ADD_TODO,COMPLETE_TODO,SET_VISIBILITY_FILTER,VisibilityFilter } from './actions';

//取对象中SHOW_ALL键的值出来
const { SHOW_ALL } = VisibilityFilter;

function todos(state = [], action) {
    switch (action.type) {
        case ADD_TODO:
            return [...state.todos, {
                text: action.text,
                completed: false
            }];
            break;
        case COMPLETE_TODO:
            return [...state.todos.slice(0, action.index), {...state.todos[action.index], {
                    completed: true
                }
            }, ...state.todos.slice(action.index + 1)];
            break;
        default:
            return state;
    }
}

function visibilityFilter(state = SHOW_ALL, action) {
    switch (action.type) {
        case SET_VISIBILITY_FILTER:
            return action.filter;
            break;
        default:
            return state;
    }
}

// function todoApp(state = {}, action) {
//     return {
//         visibilityFilter: visibilityFilter(state.visibilityFilter, action),
//         todos: todo(state.todos, action)
//     };
// }
//redux提供了更加便捷的接口替代这段reducer

const todoApp = combineReducers({
    visibilityFilter,
    todos
});

export default todoApp;