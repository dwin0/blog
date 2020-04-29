import React from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import { Form, FieldWrapper, Input, TextArea, SubmitButton } from './styles'

const ContactForm = () => {
  const { formatMessage } = useIntl()

  return (
    <Form
      name="contact"
      method="POST"
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      data-netlify-recaptcha="true"
    >
      <input type="hidden" name="bot-field" />
      <input type="hidden" name="form-name" value="teaching-material-contact" />
      <FieldWrapper>
        <label htmlFor="name">{formatMessage({ id: 'name' })}</label>
        <Input type="text" name="name" id="name" required />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="email">{formatMessage({ id: 'email' })}</label>
        <Input type="email" name="email" id="email" required />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="message">{formatMessage({ id: 'message' })}</label>
        <TextArea name="message" id="message" rows="4" required />
      </FieldWrapper>
      <div data-netlify-recaptcha="true"></div>
      <SubmitButton type="submit">
        {formatMessage({ id: 'sendForm' })}
      </SubmitButton>
    </Form>
  )
}

export default ContactForm
