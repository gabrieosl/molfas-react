import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  width: calc(100% - 20px);
  flex-direction: column;
  margin: 10px;
  border-radius: 4px;
  background: #fff;
  min-height: calc(100% - 80px);
  padding: 15px;
`;

export const OrderItemsContainer = styled.div`
  display: block;
  width: 100%;
`;
