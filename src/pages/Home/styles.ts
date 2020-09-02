import styled from 'styled-components';

export const SectionTop = styled.section`
  margin-top: 6rem;
  height: 16vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0 3rem;
`;

export const SectionBottom = styled.section`
  height: 50vh;
  margin-top: 3rem;
  padding: 3rem;

  background-color: ${(props) => props.theme.colors.secondary};
`;
