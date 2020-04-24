import styled from 'styled-components'
import { SPACE_0_25, SPACE_3, SPACE_1 } from '../constants/space'

export const BlogEntry = styled.div`
  margin: 0 0 ${SPACE_3}px 0;
`

export const BlogTitle = styled.h2`
  margin: 0;
`

export const PublishDate = styled.time`
  display: block;
  padding: ${SPACE_1}px 0 ${SPACE_0_25}px 0;
  font-size: 14px;
`
