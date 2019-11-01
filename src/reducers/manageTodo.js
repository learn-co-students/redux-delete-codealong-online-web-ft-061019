// ./src/reducers/manageTodo.js
import uuid from 'uuid';
 
export default function manageTodo(state = {
  todos: [],
}, action) {
  console.log(action);
  switch (action.type) {
    case 'ADD_TODO':
 
      const todo = {
        id: uuid(),
        text: action.payload.text
      }
      return { todos: state.todos.concat(todo) };
 
      case 'DELETE_TODO':
 // step 7: Instead of comparing todo with action.payload, now that todo is an object, we want to match todo.id with the payload.
        return {todos: state.todos.filter(todo => todo.id !== action.payload)}
 
    default:
      return state;
  }
}

/*
step 4: 

A Todo should have an id the moment it gets created. So, 
we know that our reducer creates the Todo when a CREATE_TODO action is dispatched. 
Let's update the code in there so that it also adds an id.


This causes a problem 'downstream', though: 
we need to update our TodosContainer to pass the correct content.
*/
