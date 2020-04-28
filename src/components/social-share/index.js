import React from 'react'
import {
  FacebookShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  FacebookIcon,
  TwitterIcon,
  WhatsappIcon,
} from 'react-share'
import { ShareContainer, ButtonWrapper } from './styles'

const SocialShare = ({ url, title }) => (
  <ShareContainer>
    <ButtonWrapper>
      <FacebookShareButton url={url} quote={title}>
        <FacebookIcon size={50} round />
      </FacebookShareButton>
    </ButtonWrapper>
    <ButtonWrapper>
      <TwitterShareButton url={url} quote={title}>
        <TwitterIcon size={50} round />
      </TwitterShareButton>
    </ButtonWrapper>
    <ButtonWrapper>
      <WhatsappShareButton url={url} quote={title}>
        <WhatsappIcon size={50} round />
      </WhatsappShareButton>
    </ButtonWrapper>
  </ShareContainer>
)

export default SocialShare
