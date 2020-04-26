import React from 'react'
import { graphql } from 'gatsby'
import { useIntl, Link } from 'gatsby-plugin-intl'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { BlogEntry, PublishDate, BlogTitle, BlogPreview } from '../pages-styles'
import { About } from '../components/about'

const Blog = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allMdx: { edges: posts },
  },
  location,
}) => {
  const intl = useIntl()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title={intl.formatMessage({ id: 'allPosts' })} />
      <About />
      <div>
        {posts.map(
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
                <PublishDate>{date}</PublishDate>
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
    </Layout>
  )
}

export default Blog

export const pageQuery = graphql`
  query($language: String!) {
    site {
      siteMetadata {
        title
      }
    }
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
          }
        }
      }
    }
  }
`
