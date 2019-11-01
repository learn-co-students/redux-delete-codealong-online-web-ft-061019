
import React, { Component } from 'react';
import { connect } from 'react-redux'
import Todo from './Todo'

class TodosContainer extends Component {

/*
step 2: 
We can then pass this.props.delete down to Todo, s
o that each Todo component rendered will have access to our 'DELETE_TODO' action.

step 5: render todo needs to change to also pass in it's unique id for deletion
*/
renderTodos = () => {
  return this.props.todos.map(todo => <Todo delete={this.props.delete} key={todo.id} todo={todo} />)
}

  render() {
    return(
      <div>
        {this.renderTodos()}
      </div>
    );
  }
};

mapStateToProps = state => {
  return {
    todos: state.todos
  }
}

/*
step 1:

Now, TodosContainer will have access to this.props.delete, which 
can take in an argument and send it as the action's payload

Back in our connected TodosContainer, 
when this delete button is clicked, the value of props.text i
s passed into our dispatched action as the payload.
*/
const mapDispatchToProps = dispatch => {
  return {
    delete: todoText => dispatch({type: 'DELETE_TODO', payload: todoText })
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosContainer);



/*
we don't want to load our presentational Todo component up with logic.
Meanwhile, TodosContainer is where we're connected to Redux, 
so let's write in a new mapDispatchToProps() function to include an action:
*/
