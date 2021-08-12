import React from 'react';
import { User } from '../../types';
import { Container } from './styles';

const UserCard = ({ props }: User): JSX.Element => {

  return (
    <Container>
      <div className="users-card">
        <div>
          <div className="user-photo"></div>
          <div>
            <p>{props.name}</p>
            <p>{props.website}</p>
          </div>
        </div>

        <div>
          <p>E-mail: {props.email}</p>
          <p>Telefone: {props.phone}</p>
          <p>Rua: {props.address.street}</p>
          <p>Cidade: {props.address.city}</p>
        </div>

        <div>
          <button>Ver mais</button>
        </div>
      </div>
    </Container>
  )
};

export default UserCard;