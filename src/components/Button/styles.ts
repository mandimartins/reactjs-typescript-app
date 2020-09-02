import styled from 'styled-components';

export const Container = styled.button`
  border: none;
  width: 100%;
  background-color: ${(props) => props.theme.colors.action};
  font-size: 1.8rem;
  padding: 1.2rem 2rem;
  color: ${(props) => props.theme.colors.white};
  cursor: pointer;

  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);

  &:hover {
    opacity: 0.8;
  }
`;
