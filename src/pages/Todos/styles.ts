import styled from 'styled-components';

export const Container = styled.main`
  width: 80%;
  margin: 0 auto;

  h1 {
    margin-bottom: 24px;
  }

  div.cards {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 24px;

    @media(max-width: 1259px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media(max-width: 940px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media(max-width: 620px) {
      grid-template-columns: 1fr;
    }

  }
`;