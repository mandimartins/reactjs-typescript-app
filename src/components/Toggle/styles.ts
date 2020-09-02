import styled from 'styled-components';
import Switch, { ReactSwitchProps } from 'react-switch';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const ToggleLable = styled.span`
  font-size: 1.4rem;
  color: ${(props) => props.theme.colors.tertiary};
`;
export const ToggleSelector = styled(Switch).attrs<ReactSwitchProps>(
  ({ theme }) => ({
    onColor: theme.colors.action,
  })
)<ReactSwitchProps>`
  margin: 0 0.7rem;
`;
