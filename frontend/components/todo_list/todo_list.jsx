import React from 'react';
import ReactDOM from 'react-dom';
import TodoListItem from './todo_list_items';
import TodoListForm from './todo_form';

const todoList = (props) => {
  return (
    <ul>
      {
        props.todos.map((obj) => {
          // return <li key={obj.id}>{obj.title}</li>;
          return (
            <TodoListItem key={obj.id} todo={obj} removeTodo={props.removeTodo} receiveTodo={props.receiveTodo}/>
          );
        })
      }
      <TodoListForm receiveTodo={props.receiveTodo}/>
    </ul>
  );
};

export default todoList;
