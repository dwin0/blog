import React from 'react'
import BuyMeACoffee from '../buyMeACoffee'
import SocialShare from '../social-share'
import { Wrapper } from './styles'

const SupportArea = ({ url, title, schoolPage = false }) => (
  <Wrapper>
    <BuyMeACoffee schoolPage={schoolPage} />
    <SocialShare url={url} title={title} />
  </Wrapper>
)

export default SupportArea
