export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const ACTIVE_TODO = 'ACTIVE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';
export const CLEAR_TODOS = 'CLEAR_TODOS';

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
    SHOW_ACTIVE: 'SHOW_ACTIVE'
};

export function addTodo(text) {
    return {
        type: ADD_TODO,
        text
    };
}

export function completeTodo(index) {
    return {
        type: COMPLETE_TODO,
        index
    };
}

export function activeTodo(index) {
    return {
        type: ACTIVE_TODO,
        index
    }
}

export function setVisibilityFilter(filter) {
    return {
        type: SET_VISIBILITY_FILTER,
        filter
    };
}

export function clearTodos() {
    return {
        type: CLEAR_TODOS
    }
}
