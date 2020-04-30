import React, { useState, useReducer } from 'react'
import { useIntl } from 'gatsby-plugin-intl'

import {
  Form,
  FieldWrapper,
  Input,
  TextArea,
  SubmitButton,
  SubmitError,
  ButtonWrapper,
  SubmitOKButton,
} from './styles'

const encode = (data) =>
  Object.keys(data)
    .map((key) => encodeURIComponent(key) + '=' + encodeURIComponent(data[key]))
    .join('&')

const initialState = {
  botField: '',
  name: '',
  email: '',
  message: '',
}

const formReducer = (state, { field, value }) => ({
  ...state,
  [field]: value,
})

const ContactForm = () => {
  const { formatMessage } = useIntl()
  const [formState, dispatch] = useReducer(formReducer, initialState)
  const { botField, name, email, message } = formState
  const [submitError, setSubmitError] = useState('')
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = ({ target: { name, value } }) => {
    dispatch({ field: name, value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    const form = event.target

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode({
        'form-name': form.getAttribute('name'),
        ...formState,
      }),
    })
      .then(() => {
        setIsSubmitted(true)
      })
      .catch((error) => {
        setSubmitError(error)
      })
  }

  return (
    <Form
      name="contact"
      method="POST"
      onSubmit={handleSubmit}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
    >
      <input
        type="hidden"
        name="bot-field"
        value={botField}
        onChange={handleChange}
      />
      <FieldWrapper>
        <label htmlFor="name">{formatMessage({ id: 'name' })}</label>
        <Input
          type="text"
          name="name"
          id="name"
          required
          value={name}
          onChange={handleChange}
          disabled={isSubmitted}
        />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="email">{formatMessage({ id: 'email' })}</label>
        <Input
          type="email"
          name="email"
          id="email"
          required
          value={email}
          onChange={handleChange}
          disabled={isSubmitted}
        />
      </FieldWrapper>
      <FieldWrapper>
        <label htmlFor="message">{formatMessage({ id: 'message' })}</label>
        <TextArea
          name="message"
          id="message"
          rows="4"
          required
          value={message}
          onChange={handleChange}
          disabled={isSubmitted}
        />
      </FieldWrapper>
      {submitError && <SubmitError>{submitError}</SubmitError>}
      <ButtonWrapper>
        <SubmitOKButton type="button" isSubmitted={isSubmitted}>
          {formatMessage({ id: 'sentForm' })} &#10004;
        </SubmitOKButton>
        <SubmitButton
          type="submit"
          disabled={isSubmitted}
          isSubmitted={isSubmitted}
        >
          {formatMessage({ id: 'sendForm' })}
        </SubmitButton>
      </ButtonWrapper>
    </Form>
  )
}

export default ContactForm
