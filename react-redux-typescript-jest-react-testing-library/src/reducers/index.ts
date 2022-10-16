import { combineReducers } from 'redux';
import { todosReducer } from './todos';
import { Todo } from './actions/index';

export interface StoreState {
  todos: Todo[];
}

// combineReducers is a generic function
// so in order for us to properly document
// our combineReducers call and get proper suggestions
// from TypeScript, we can pass in an interface
// describing the structure of the state of our store like so `combineReducers<StoreState>`
export const reducers = combineReducers<StoreState>({
  todos: todosReducer,
});
