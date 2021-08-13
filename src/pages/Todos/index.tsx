import React from 'react';
import TodoCard from '../../components/TodoCard';
import { useTodosUsers } from '../../hooks/useTodosUsers';
import { Container } from './styles';

const Todos = (): JSX.Element => {
  const { todos } = useTodosUsers();

  return (
    <Container>
      <h1>Todos os todos</h1>

      <div className="cards">
        {todos.map(todo => (
          <TodoCard key={todo.props.title} props={todo.props} />
        ))}
      </div>
    </Container>
  )
};

export default Todos;