import React from 'react'
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
  const blogPath = `${__PATH_PREFIX__}/`

  return (
    <Wrapper>
      <MainWrapper>
        <header>
          {location.pathname === blogPath ? (
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
