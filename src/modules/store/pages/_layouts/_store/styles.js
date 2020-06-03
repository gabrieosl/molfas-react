import styled from 'styled-components';

import { COLOR_1, COLOR_2 } from '~/shared/styles/global';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;

  height: 100%;

  background: linear-gradient(90deg, ${COLOR_1}, ${COLOR_2});
`;
export const Content = styled.div`
  flex-grow: 1;

  display: flex;
  flex-direction: column;
`;
