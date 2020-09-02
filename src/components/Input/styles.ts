import styled from 'styled-components';

export const Container = styled.input`
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 1.8rem;
  padding: 1.2rem 2rem;
  color: ${(props) => props.theme.colors.grey};

  &:focus {
    color: ${(props) => props.theme.colors.action};
    border: 1px solid ${(props) => props.theme.colors.action};
  }
`;
