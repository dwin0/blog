import styled from 'styled-components'
import mq from '../constants/mq'
import { SPACE_2, SPACE_4 } from '../constants/space'

export const List = styled.ul`
  list-style: none;
  margin: 0 0 ${SPACE_4}px 0;
`

export const MaterialItem = styled.li`
  padding: 0;
  display: flex;
  justify-content: flex-start;

  ${mq.lessThan('medium')`
    flex-direction: column;
  `};
`

export const PreviewImageLink = styled.a`
  margin-right: ${SPACE_2}px;
  width: 300px;
  min-width: 300px;

  ${mq.lessThan('medium')`
    align-self: center;
    margin: 0;
  `};
`
