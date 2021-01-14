import styled from 'styled-components'
 
export const Svg = styled.svg`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  z-index: 1;
  fill: #0bc1fd;
  ${p => p.isSuccess && "fill: #16bd92"};
  ${p => p.isError && "fill: #fb6767"};
  transform: scale(${p => p.isComplete ? 20 : 1});
  transition: transform 0.35s, fill 0.35s;
`
