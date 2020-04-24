import React from 'react'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'
import {
  Wrapper,
  MainWrapper,
  Footer,
  MainTitle,
  MainTitleLink,
  BlogTitle,
  BlogTitleLink,
} from './styles'

const Layout = ({ location, title, children }) => {
  const intl = useIntl()
  const homePaths = [
    `${__PATH_PREFIX__}/${intl.locale}`,
    `${__PATH_PREFIX__}/${intl.locale}/`,
  ]

  return (
    <Wrapper>
      <MainWrapper>
        <header>
          {homePaths.includes(location.pathname) ? (
            <MainTitle>
              <MainTitleLink to="/">{title}</MainTitleLink>
            </MainTitle>
          ) : (
            <BlogTitle>
              <BlogTitleLink to="/">{title}</BlogTitleLink>
            </BlogTitle>
          )}
          <button onClick={() => changeLocale('de')}>
            {intl.formatMessage({ id: 'German' })}
          </button>
          <button onClick={() => changeLocale('en')}>
            {intl.formatMessage({ id: 'English' })}
          </button>
        </header>
        <main>{children}</main>
      </MainWrapper>
      <Footer>
        © {new Date().getFullYear()}, Built with &nbsp;
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Wrapper>
  )
}

export default Layout
