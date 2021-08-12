import React from 'react';
import { Container, Link } from './styles';

const Header = (): JSX.Element => {

  return (
    <Container>
      <div>
        <Link className="logo" to="/todos">
          TodosTest
        </Link>

        <div>
          <Link 
            activeStyle={{
              fontWeight: "bold"
            }}
            exact
            to="/todos"
          >
            todos
          </Link>
          <Link 
            activeStyle={{
              fontWeight: "bold",
            }}
            exact
            to="/users"
          >
            usuários
          </Link>
        </div>
      </div>
    </Container>
  )
};

export default Header;