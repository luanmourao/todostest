import styled from 'styled-components';

export const Container = styled.div`
  width: 264px;
  height: 96px;
  background-color: var(--card-bg);
  border-radius: 5px;
  padding: 18px;

  div {
    height: 6px;
    width: 43.11px;
    background-color: var(--blue);
    margin-bottom: 12px;
    border-radius: 10px;

    &.completed {
      background-color: var(--green);
    }
  }

  > p {
    margin-bottom: 8px;
  }

`;