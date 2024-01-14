import styled from "styled-components"

export const PunctureContainer = styled.div`
  position: absolute;
  z-index: var(--z-index-five);
  left: -18px;
  padding: 50%;
  width: 100%;
`

export const PunctureOne = styled.div`
  box-sizing: border-box;

  width: 35px;
  height: 33px;
  border-radius: 100px;

  background: radial-gradient(50% 50% at 50% 50%, #ffb0b0 0%, #ffb877 81.25%);
  outline: 2px solid #ffffff;
  box-shadow: inset 1px 4px 4px 4px rgba(61, 7, 7, 0.76);
  transform: rotate(0);
`
export const PunctureTwo = styled.div`
  box-sizing: border-box;

  width: 35px;
  height: 34px;
  border-radius: 100px;

  background: #ff9a9a;
  outline: 2px solid #ffffff;
  box-shadow: inset 1px 4px 4px 4px rgba(61, 7, 7, 0.76);
  transform: rotate(0);

  margin-top: 64px;
`
