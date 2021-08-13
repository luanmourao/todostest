import React from 'react';
import UserCard from '../../components/UserCard';
import { useTodosUsers } from '../../hooks/useTodosUsers';
import { Container } from './styles';

const Users = (): JSX.Element => {
  const { users } = useTodosUsers();

  return (
    <Container>
      <h1>Usuários</h1>

      <div className="users">
        {users.map(user => (
          <UserCard key={user.props.name} props={user.props}/>
        ))}
      </div>

    </Container>
  )
};

export default Users;