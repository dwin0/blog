import styled, { css, keyframes } from 'styled-components'
import { Link } from 'gatsby-plugin-intl'
import {
  SPACE_0_5,
  SPACE_1,
  SPACE_1_5,
  SPACE_2,
  SPACE_3,
  SPACE_4,
  PAGE_MAX_WIDTH,
  SIDE_MARGIN,
} from '../../constants/space'
import { BLACK } from '../../constants/colors'
import mq from '../../constants/mq'

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

export const MainTitleWrapper = styled.div`
  ${mq.greaterThan('medium')`
    position: relative;
  `}
`

export const MainTitle = styled.h1`
  font-size: 60px;
  margin: 0 0 ${SPACE_4}px 0;

  ${mq.lessThan('medium')`
    font-size: 40px;
    margin: 0 0 ${SPACE_2}px 0;
  `}
`

const rotate = keyframes`
  from {
    transform: translate(-33%, -33%) rotate(30deg);
  }

  to {
    transform: translate(-33%, -33%) rotate(390deg);
  }
`

export const MainTitleImageWrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: 0;
  max-width: 200px;
  min-width: 120px;
  width: 20vw;
  opacity: 0.2;
  animation: ${rotate} 420s linear infinite;
`

export const MainTitleLink = styled(Link)`
  color: ${BLACK};
  :hover {
    text-decoration: none;
  }
`

export const BlogTitleWrapper = styled.div`
  display: flex;
  align-items: center;
`

export const BlogTitleImageWrapper = styled.div`
  width: 40px;
  min-width: 40px;
  margin-right: ${SPACE_0_5}px;
  margin-left: -5px; /* align to left side visually */
`

export const BlogTitle = styled.h2`
  font-size: 25px;
  margin-bottom: ${SPACE_2}px;
`

export const BlogTitleLink = styled(MainTitleLink)`
  display: flex;
  align-items: center;
  word-break: break-word;
`

export const LangWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: ${SPACE_1_5}px;
`

export const LangButton = styled.div`
  cursor: pointer;
  border-top: 2px solid transparent;

  ${({ isActive }) =>
    isActive &&
    css`
      border-color: ${BLACK};
    `};

  &:not(:last-of-type) {
    margin-right: ${SPACE_1}px;
  }
`
