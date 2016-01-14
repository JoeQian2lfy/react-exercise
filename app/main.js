//redux基础
/*
 * 这是一个 reducer，形式为 (state, action) => state 的纯函数。
 * 描述了 action 如何把 state 转变成下一个 state。
 *
 * state 的形式取决于你，可以是基本类型、数组、对象、
 * 甚至是 Immutable.js 生成的数据结构。惟一的要点是
 * 当 state 变化时需要返回全新的对象，而不是修改传入的参数。
 *
 * 下面例子使用 `switch` 语句和字符串来做判断，但你可以写帮助类(helper)
 * 根据不同的约定（如方法映射）来判断，只要适用你的项目即可。
*/
/*
import { createStore } from 'redux';

function counter(state=0, action) {
    switch (action.type) {
        case '+':
            return state + 1;
            break;
        case '-':
            return state - 1;
            break;
        default:
            return state;
    }
}

// 创建 Redux store 来存放应用的状态。
// API 是 { subscribe, dispatch, getState }。
let store = createStore(counter);

// 可以手动订阅更新，也可以事件绑定到视图层。
store.subscribe(() => {
    console.log(store.getState());
});

// 改变内部 state 惟一方法是 dispatch 一个 action。
// action 可以被序列化，用日记记录和储存下来，后期还可以以回放的方式执行
store.dispatch({ type: 'other' });
store.dispatch({ type: '+' });
store.dispatch({ type: '+' });
store.dispatch({ type: '-' });
*/

import { createStore } from 'redux';
import todoApp from './reducer';
import { addTodo, completeTodo, setVisibilityFilter, VisibilityFilters } from './actions';

//创建store，Redux应用中store有且只有唯一一个！若需要拆分处理数据逻辑时就使用renduce组合
let store = createStore(todoApp);

console.log(store.getState());

let unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

store.dispatch(addTodo('任务1'));
store.dispatch(addTodo('任务2'));
store.dispatch(completeTodo(0));
store.dispatch(setVisibilityFilter(VisibilityFilters.SHOW_COMPLETED));
