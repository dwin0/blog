import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { ic_mood } from 'react-icons-kit/md/ic_mood'
import { TwitterIcon } from 'react-share'

import { Wrapper, Icon, Text } from './styles'

export const About = () => {
  const intl = useIntl()
  const [hovered, setHovered] = useState(false)

  return (
    <Wrapper
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Icon size={64} icon={ic_mood} rotate={hovered} />
      <Text>
        <span>{intl.formatMessage({ id: 'aboutMe' })}</span>
        <br />
        <br />
        <span>{intl.formatMessage({ id: 'followOnTwitter' })}</span>
        <span>
          <a
            href="https://twitter.com/WebDeveloperBl1"
            target="_blank"
            rel="noopener noreferrer"
          >
            &nbsp;
            <TwitterIcon size={20} round />
            &nbsp; Twitter
          </a>
          .
        </span>
      </Text>
    </Wrapper>
  )
}
