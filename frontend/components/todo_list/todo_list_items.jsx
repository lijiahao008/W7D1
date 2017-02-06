import React from 'react';
import ReactDOM from 'react-dom';

class TodoListItem extends React.Component {
  constructor(props) {
    super(props);
    this.todo = this.props.todo;
    this.state = {
      id: this.todo.id,
      title: this.todo.title,
      body: this.todo.body,
      done: this.todo.done
    };
    this.removeItem = this.removeItem.bind(this);
    this.updateItem = this.updateItem.bind(this);
    this.buttonDisplay = this.buttonDisplay.bind(this);
  }

  removeItem(event) {
    event.preventDefault();
    this.props.removeTodo(this.todo);
  }

  updateItem(e){
    e.preventDefault();
    this.setState({done: !this.state.done});
    this.props.receiveTodo(this.todo);


    // debugger
  }

  buttonDisplay(){
    return this.state.done ? "Undone" : "Done";
  }

  render() {
    return (
      <li key={this.todo.id}>{this.todo.title}
        <button type="submit" onClick={this.removeItem}>Remove</button>
        <button type="submit" onClick={this.updateItem}>{ this.buttonDisplay() }</button></li>
    );
  }
}

export default TodoListItem;
