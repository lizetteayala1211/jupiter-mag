import { screenLgMin } from "@/utils/constants"
import styled from "styled-components"

export const FormContainer = styled.form`
  display: flex;
  flex-direction: column;
  gap: 2em;
  border: 1px solid var(--color-white);
  height: auto;
  max-width: 600px;
  padding: 1.5em;
  background-color: var(--color-off-black);
  @media only screen and (min-width: ${screenLgMin}) {
    padding: 3em;
  }
`

export const Input = styled.input`
  font-size: 1.5em;
  font-family: "Darker Grotesque", sans-serif;
  font-weight: 200;
  background-color: transparent;
  border: none;
  width: 100%;
  color: var(--color-white);
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 2.5em;
    padding-top: 0.4em;
  }
`

export const MessageInput = styled.textarea`
  background-color: transparent;
  border: 2px solid var(--color-white);
  width: 100%;
  height: 222px;
  color: var(--color-white);
  font-family: "Darker Grotesque", sans-serif;
  font-weight: 200;
  padding: 8px;
  font-size: 1.5em;
  @media only screen and (min-width: ${screenLgMin}) {
    padding: 4px 8px;
    font-size: 2.5em;
  }
`

export const Label = styled.label`
  font-size: 1.5em;
  text-transform: uppercase;
  color: var(--color-white);
  @media only screen and (min-width: ${screenLgMin}) {
    font-size: 3em;
  }
`

export const InputContainer = styled.div`
  display: flex;
  gap: 1em;
  border-bottom: 2px solid var(--color-white);

  @media only screen and (min-width: ${screenLgMin}) {
    height: 3.8em;
  }
`

export const SubmitButton = styled.button`
  font-size: 24px;
  border-radius: 100px;
  background-color: transparent;
  color: var(--color-white);
  border: 2px solid var(--color-white);
  padding: 4px 16px;
  @media only screen and (min-width: ${screenLgMin}) {
    padding: 8px 20px;
    font-size: 32px;
  }
`
