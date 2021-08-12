import React from 'react';
import { Todo } from '../../types';
import { Container } from './styles';

const TodoCard = ({ props }: Todo): JSX.Element => {
  let className;

  if (props.completed) {
    className = "completed";
  }

  return (
    <Container>
      <div className={className}></div>
      <p>Título: {props.title}</p>
      <p>Responsável: {props.userName}</p>
    </Container>
  )
};

export default TodoCard;