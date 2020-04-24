import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../components/layout'
import SEO from '../components/seo'
import { BlogEntry, PublishDate, BlogTitle } from '../pages-styles'

const Blog = ({
  data: {
    site: {
      siteMetadata: { title: siteTitle },
    },
    allMdx: { edges: posts },
  },
  location,
}) => (
  <Layout location={location} title={siteTitle}>
    <SEO title="All posts" />
    <div>
      {posts.map(
        ({
          node: {
            frontmatter: { title, description, date },
            fields: { slug },
            excerpt,
          },
        }) => (
          <BlogEntry key={slug}>
            <BlogTitle>
              <Link to={`/blog${slug}`}>{title}</Link>
            </BlogTitle>
            <PublishDate>{date}</PublishDate>
            <p
              dangerouslySetInnerHTML={{
                __html: description || excerpt,
              }}
            />
          </BlogEntry>
        )
      )}
    </div>
  </Layout>
)

export default Blog

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMdx(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          excerpt
          fields {
            slug
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
