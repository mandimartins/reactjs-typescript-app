import styled from 'styled-components';
import { HiX } from 'react-icons/hi';

export const Container = styled.div`
  margin: 1rem 0;
  display: flex;
  justify-content: space-between;
  width: 100%;
  background-color: ${(props) => props.theme.colors.primary};
  padding: 1.2rem 2rem;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

export const Title = styled.h1`
  font-size: 1.8rem;
  color: ${(props) => props.theme.colors.tertiary};
`;

export const Icon = styled(HiX)`
  font-size: 2rem;
  color: ${(props) => props.theme.colors.action};
`;
