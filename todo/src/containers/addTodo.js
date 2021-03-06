import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions';
import { Button } from 'reactstrap';


const AddTodo = ({ dispatch }) => {
  let input;

  return (
    <div>
      <form onSubmit={event => {
        event.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}>
        <input placeholder="Things to Complete..." ref={node => input = node} />
        <Button color="success" type="submit">Add To List</Button>
      </form>
    </div>
  )
}

export default connect()(AddTodo);
