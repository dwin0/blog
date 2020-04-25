import React from 'react'
import styled, { css } from 'styled-components'
import { Icon as ReactIcon } from 'react-icons-kit'
import mq from '../../constants/mq'
import { SPACE_1, SPACE_2 } from '../../constants/space'

export const Wrapper = styled.div`
  ${mq.greaterThan('medium')`
    display: flex;
    margin-bottom: ${SPACE_2}px;
  `};
`

export const Icon = styled(({ rotate, ...otherProps }) => (
  <ReactIcon {...otherProps} />
))`
  ${mq.lessThan('medium')`
    float: left;
    padding-right: ${SPACE_1}px;
  `};

  ${mq.greaterThan('medium')`
    margin-right: 20px;
    transition: transform 0.3s;
    ${({ rotate }) =>
      rotate &&
      css`
        transform: scale(1.1) rotate(10deg);
      `}
  `};
`

export const Text = styled.p``
