import styled, { css } from 'styled-components'
import { LIGHT_BLUE, WHITE } from '../../constants/colors'
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

export const Input = styled.input`
  ${commonStyles};
`

export const TextArea = styled.textarea`
  ${commonStyles};
`

export const SubmitButton = styled.button`
  ${commonStyles};
  background: ${LIGHT_BLUE};
  color: ${WHITE};
  margin: 0;
  border: 0;
  padding: 10px 20px;

  &:active {
    transform: translate(2px, 2px);
  }
`
