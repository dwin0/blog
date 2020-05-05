import React from 'react'
import { graphql } from 'gatsby'
import { useIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'
import {
  BlogEntry,
  PublishDate,
  BlogTitle,
  BlogPreview,
  TeachingMaterialLink,
} from '../pages-styles'
import { About } from '../components/about'

const Blog = ({
  data: {
    allMdx: { edges: posts },
  },
  location,
}) => {
  const intl = useIntl()

  return (
    <Layout location={location}>
      <SEO
        title={intl.formatMessage({ id: 'home' })}
        lang={intl.locale}
        url={location.href}
        keywords={intl.formatMessage({ id: 'keywordsHomePage' }).split(', ')}
      />
      <About />
      <div>
        {posts
          .filter(({ node }) =>
            process.env.NODE_ENV === `production`
              ? !node.frontmatter.draft
              : true
          )
          .map(
            ({
              node: {
                frontmatter: { title, description, date },
                fields: { blogPath },
                excerpt,
              },
            }) => {
              const link = `/blog${blogPath}`

              return (
                <BlogEntry key={blogPath}>
                  <BlogTitle>
                    <Link to={link}>{title}</Link>
                  </BlogTitle>
                  <PublishDate>
                    {intl.formatDate(date, {
                      year: 'numeric',
                      month: 'long',
                      day: 'numeric',
                    })}
                  </PublishDate>
                  <BlogPreview
                    dangerouslySetInnerHTML={{
                      __html: description || excerpt,
                    }}
                  />
                  <Link to={link}>
                    {intl.formatMessage({ id: 'readMore' })}&nbsp;→
                  </Link>
                </BlogEntry>
              )
            }
          )}
      </div>
      {intl.locale === 'de' && (
        <TeachingMaterialLink to="/school">
          {intl.formatMessage({ id: 'teachingMaterial' })}
        </TeachingMaterialLink>
      )}
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query($language: String!) {
    allMdx(
      filter: { fields: { language: { eq: $language } } }
      sort: { fields: [frontmatter___date], order: DESC }
    ) {
      edges {
        node {
          excerpt
          fields {
            blogPath
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            description
            draft
          }
        }
      }
    }
  }
`
