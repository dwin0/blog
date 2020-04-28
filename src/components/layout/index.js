import React from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import Image from 'gatsby-image'
import { useIntl, changeLocale } from 'gatsby-plugin-intl'
import {
  Wrapper,
  MainWrapper,
  Footer,
  MainTitleWrapper,
  MainTitle,
  MainTitleImageWrapper,
  MainTitleLink,
  BlogTitleImageWrapper,
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

  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/globe-icon.png" }) {
          childImageSharp {
            fluid(maxWidth: 200, srcSetBreakpoints: [120, 200, 240, 400]) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

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
            <MainTitleWrapper>
              <MainTitleImageWrapper>
                <Image fluid={file.childImageSharp.fluid} />
              </MainTitleImageWrapper>
              <MainTitle>
                <MainTitleLink to="/">{blogTitle}</MainTitleLink>
              </MainTitle>
            </MainTitleWrapper>
          ) : (
            <BlogTitle>
              <BlogTitleLink to="/">
                <BlogTitleImageWrapper>
                  <Image fluid={file.childImageSharp.fluid} />
                </BlogTitleImageWrapper>
                <span>{blogTitle}</span>
              </BlogTitleLink>
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
