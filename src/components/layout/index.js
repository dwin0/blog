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

const Layout = ({ location, children }) => {
  const { locale: currentLanguage, formatMessage } = useIntl()
  const blogTitle = formatMessage({ id: 'webDevelopmentBlog' })
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
              <MainTitleLink to="/">{blogTitle}</MainTitleLink>
            </MainTitle>
          ) : (
            <BlogTitle>
              <BlogTitleLink to="/">{blogTitle}</BlogTitleLink>
            </BlogTitle>
          )}
        </header>
        <main>{children}</main>
      </MainWrapper>
      <Footer>
        © {new Date().getFullYear()}, {formatMessage({ id: 'builtWith' })}
        &nbsp;
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </Footer>
    </Wrapper>
  )
}

export default Layout
