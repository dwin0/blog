import styled, { css } from 'styled-components'
import {
  LIGHT_BLUE,
  WHITE,
  RED,
  DARK_GREEN,
  GREY,
} from '../../constants/colors'
import { SPACE_1 } from '../../constants/space'

const commonStyles = css`
  border-radius: 5px;
  border: 1px solid grey;
  padding: 5px 10px;
  margin-bottom: ${SPACE_1}px;
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const FieldWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`

const textInputStyles = css`
  ${({ disabled }) =>
    disabled
      ? css`
          background: ${GREY};
        `
      : css`
          background: ${WHITE};
        `};
`

export const Input = styled.input`
  ${commonStyles};
  ${textInputStyles};
`

export const TextArea = styled.textarea`
  ${commonStyles};
  ${textInputStyles};
`

export const ButtonWrapper = styled.div`
  position: relative;
  align-self: center;
  width: 100%;
  height: 50px;
  display: flex;
  justify-content: center;
`

const buttonStyle = css`
  ${commonStyles};
  position: absolute;
  color: ${WHITE};
  margin: 0;
  border: 0;
  padding: 10px 20px;
  width: 200px;
  transition: transform 0.5s;

  &:active {
    transform: translate(2px, 2px);
  }
`

export const SubmitButton = styled.button`
  ${buttonStyle};
  background: ${LIGHT_BLUE};
  transform-origin: top;

  ${({ isSubmitted }) =>
    isSubmitted
      ? css`
          transform: translateY(100%) rotateX(-90deg);
        `
      : css`
          transform: translateY(0) rotateX(0);
        `};
`

export const SubmitOKButton = styled.button`
  ${buttonStyle};
  background: ${DARK_GREEN};
  transform-origin: bottom;

  ${({ isSubmitted }) =>
    isSubmitted
      ? css`
          transform: transform: translateY(0) rotateX(0);
        `
      : css`
          transform: translateY(-100%) rotateX(90deg);
        `};
`

export const SubmitError = styled.p`
  color: ${RED};
  font-weight: bold;
`
