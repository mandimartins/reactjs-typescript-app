import styled from 'styled-components';

export const Container = styled.input`
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.secondary};
  font-size: 1.8rem;
  padding: 1.2rem 2rem;
  color: ${(props) => props.theme.colors.grey};
  outline: none;

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.action};
    color: ${(props) => props.theme.colors.action};
  }

  &:focus::placeholder {
    color: ${(props) => props.theme.colors.action};
  }
`;
