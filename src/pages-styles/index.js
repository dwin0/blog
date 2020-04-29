import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'
import { SPACE_0_25, SPACE_0_5, SPACE_3 } from '../constants/space'
import { WHITE, DARK_GREEN } from '../constants/colors'

export const BlogEntry = styled.div`
  margin: 0 0 ${SPACE_3}px 0;
`

export const BlogTitle = styled.h2`
  margin: 0;
`

export const PublishDate = styled.time`
  display: block;
  padding: ${SPACE_0_5}px 0 ${SPACE_0_25}px 0;
  font-size: 14px;
`

export const BlogPreview = styled.p`
  margin: 0 0 ${SPACE_0_5}px 0;
`

export const TeachingMaterialLink = styled(Link)`
  background: ${DARK_GREEN};
  color: ${WHITE};
  text-decoration: none;
  display: inline-block;
  margin-top: ${SPACE_3}px;
  padding: 10px 20px;
  border-radius: 5px;
`
