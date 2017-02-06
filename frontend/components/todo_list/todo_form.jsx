import React from 'react';
import ReactDOM from 'react-dom';
import   uniqueId   from '../../util/util';

class TodoListForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: null,
      body: '',
      title: '',
      done: false
    };
    this.submitForm = this.submitForm.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
  }

  submitForm(event) {
    event.preventDefault();
    let newId = uniqueId();
    this.setState({id: newId});
    this.props.receiveTodo(this.state);
  }

  updateTitle(event) {
    this.setState({title: event.currentTarget.value});

  }

  updateBody(event) {
    this.setState({body: event.currentTarget.value});
  }

  render() {
    return (
      <form onSubmit={this.submitForm}>
        Title
        <input type="text" onChange={this.updateTitle}/>
        Body
        <input type="text" onChange={this.updateBody}/>
        <input type="submit" value="Press me"/>

      </form>
    );
  }
}

export default TodoListForm;
