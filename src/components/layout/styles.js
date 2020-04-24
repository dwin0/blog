import styled from 'styled-components'
import { Link } from 'gatsby-plugin-intl'
import {
  SPACE_1_5,
  SPACE_3,
  SPACE_4,
  PAGE_MAX_WIDTH,
  SIDE_MARGIN,
} from '../../constants/space'
import { BLACK } from '../../constants/colors'

export const Wrapper = styled.div`
  min-height: 100vh;
`

export const MainWrapper = styled.div`
  margin: 0 auto;
  max-width: ${PAGE_MAX_WIDTH}px;
  padding: ${SPACE_3}px ${SIDE_MARGIN}px;
`

export const Footer = styled.footer`
  text-align: center;
  margin: ${SPACE_1_5}px;
`

export const MainTitle = styled.h1`
  font-size: 60px;
  margin: 0 0 ${SPACE_4}px 0;
`

export const MainTitleLink = styled(Link)`
  color: ${BLACK};
  :hover {
    text-decoration: none;
  }
`

export const BlogTitle = styled.h2`
  font-size: 25px;
`

export const BlogTitleLink = MainTitleLink
