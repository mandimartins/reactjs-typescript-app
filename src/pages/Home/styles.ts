import styled from 'styled-components';

export const SectionTop = styled.section`
  height: 25vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
`;

export const SectionBottom = styled.section`
  height: 50vh;
  margin-top: 3rem;
  padding: 3rem;

  overflow-y: scroll;

  ::-webkit-scrollbar {
    width: 1rem;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${(props) => props.theme.colors.action};
    border-radius: 1rem;
  }

  ::-webkit-scrollbar-track {
    background-color: ${(props) => props.theme.colors.primary};
    border-radius: 1rem;
  }

  background-color: ${(props) => props.theme.colors.secondary};
`;
