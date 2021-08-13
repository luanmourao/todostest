import styled from 'styled-components';

export const Container = styled.div`
  min-height: 284px;
  background-color: var(--card-bg);
  border-radius: 5px;
  padding: 18px 18px;

  > div.users-card {
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;

    > div:first-child {
      width: 90%;
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 20px;

      p {
        line-height: 26px;
      }
    }

    > div:nth-child(2) {
      margin-bottom: 24px;

      p {
        text-align: center;
        line-height: 26px;
      }
    }

    > div:last-child {
      margin-top: auto;
      width: 100%;
    }

    button {
      width: 100%;
      height: 32px;
      color: whitesmoke;
      background-color: var(--blue);
      border: none;
      border-radius: 5px;
    }

    button:hover {
      filter: brightness(1.3);
      transition: .4s;
    }
  }

  div.user-photo {
    height: 38px;
    width: 38px;
    border-radius: 50%;
    background-color: #c4c4c4;
    margin-right: 20px;
    padding: 20px;
  }
`;