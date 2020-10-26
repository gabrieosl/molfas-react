import styled from 'styled-components';

export const Container = styled.div`
  flex-shrink: 0;
  width: 100%;
  height: 100vh;
  min-height: 400px;
  max-height: 700px;
  overflow-x: auto;

  display: flex;
  align-items: stretch;
  scroll-snap-type: x mandatory;

  &::-webkit-scrollbar {
    display: none;
  }

  &::before {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 45px;
    height: 45px;
    border-left: 2px solid ${props => props.theme.default};
    border-bottom: 2px solid ${props => props.theme.default};
    transform: translateX(20px) translateY(-50%) rotate(45deg);
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    right: 0;
    width: 45px;
    height: 45px;
    background: none;
    border-top: 2px solid ${props => props.theme.default};
    border-right: 2px solid ${props => props.theme.default};
    transform: translateX(-20px) translateY(-50%) rotate(45deg);
  }
`;

export const Banner = styled.div`
  position: relative;
  flex-shrink: 0;
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;

  scroll-snap-align: start;

  &::after {
    content: '';
    background: url(${props => props.backgroundURL});
    opacity: 0.3;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    position: absolute;
    z-index: -1;
  }
`;
