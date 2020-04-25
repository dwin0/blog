import React, { useState } from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { ic_mood } from 'react-icons-kit/md/ic_mood'

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
      <Text>{intl.formatMessage({ id: 'aboutMe' })}</Text>
    </Wrapper>
  )
}
