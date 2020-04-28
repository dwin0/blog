import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'
import { BmcButton, CoffeeImage, Text } from './styles'

const BuyMeACoffee = () => {
  const intl = useIntl()

  return (
    <BmcButton
      target="_blank"
      rel="noopener noreferrer"
      href="https://www.buymeacoffee.com/webdev"
    >
      <CoffeeImage
        src="https://cdn.buymeacoffee.com/buttons/bmc-new-btn-logo.svg"
        alt={intl.formatMessage({ id: 'cupOfCoffee' })}
      />
      <Text>{intl.formatMessage({ id: 'buyMeACoffee' })}</Text>
    </BmcButton>
  )
}

export default BuyMeACoffee
