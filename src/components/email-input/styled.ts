import styled from "styled-components"

export const Form = styled.form`
  height: 32px;
  width: 324px;
`

export const Input = styled.input`
  background-color: transparent;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid var(--color-off-black);
  font-size: 18px;
  font-weight: 300;
  font-family: "Darker Grotesque", sans-serif;
`

export const InputContainer = styled.div`
  display: flex;
  flex-direction: row;
`

export const ArrowButtonContainer = styled.button`
  height: 32px;
  width: 28px;
  background-color: transparent;
  padding: 8px;
  border: none;
`

export const ArrowAnimation = styled.div`
  @-webkit-keyframes sticker {
    0% {
      opacity: 100%;
    }

    100% {
      opacity: 0%;
    }
  }

  @keyframes sticker {
    0% {
      opacity: 100%;
    }

    100% {
      opacity: 0%;
    }
  }

  animation-name: sticker;
  animation-duration: 2s;
  animation-timing-function: linear;
`
