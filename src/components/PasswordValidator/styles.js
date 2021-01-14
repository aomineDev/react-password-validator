import styled, { keyframes } from 'styled-components'

export const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  padding: 0.5rem;
  border-radius: 28px;
  background-color: white;
`
export const Input = styled.input`
  width: 150px;
  padding-left: 15px;
  font-size: 16px;
  font-weight: 600;
`
export const Button = styled.button`
  position: relative;
  width: 40px;
  height: 40px;
  background-color: transparent;
`
export const Icon = styled.span`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  font-size: 30px;
  font-weight: 600;
  line-height: 4px;
`
const spin = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Spin = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  animation: ${spin} 0.5s linear;
`
export const Message = styled.div`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  transition: transform 0.5s;
  font-weight: 600;
  color: #fff;
`