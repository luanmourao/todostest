import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { darken } from 'polished';

export const Container = styled.header`
  background-color: ${darken(0.04, "#242424")};
  margin-bottom: 96px;

  > div {
    max-width: 80%;
    margin: 0 auto;
    padding: 32px 16px;
    display: flex;
    justify-content: space-between;
  }

  > div div a {
    margin-left: 18px;
    padding-top: 12px;

    &:hover {
      border-top: 1px solid whitesmoke;
    }
  }

  .logo {
    font-size: 18px;
    font-weight: 500;
  }
`;

export const Link = styled(NavLink)`
  text-decoration: none;
  color: whitesmoke;
`;