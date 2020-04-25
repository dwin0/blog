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
  LangWrapper,
  LangButton,
} from './styles'

const Layout = ({ location, title, children }) => {
  const { locale: currentLanguage } = useIntl()
  const homePaths = [
    `${__PATH_PREFIX__}/${currentLanguage}`,
    `${__PATH_PREFIX__}/${currentLanguage}/`,
  ]

  return (
    <Wrapper>
      <MainWrapper>
        <header>
          <LangWrapper>
            <LangButton
              tabIndex="0"
              role="button"
              onClick={() => changeLocale('de')}
              isActive={currentLanguage === 'de'}
            >
              Deutsch
            </LangButton>
            <LangButton
              tabIndex="0"
              role="button"
              onClick={() => changeLocale('en')}
              isActive={currentLanguage === 'en'}
            >
              English
            </LangButton>
          </LangWrapper>
          {homePaths.includes(location.pathname) ? (
            <MainTitle>
              <MainTitleLink to="/">{title}</MainTitleLink>
            </MainTitle>
          ) : (
            <BlogTitle>
              <BlogTitleLink to="/">{title}</BlogTitleLink>
            </BlogTitle>
          )}
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
