import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link } from 'gatsby-plugin-intl'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../components/layout'
import SEO from '../components/seo'

const BlogPostTemplate = ({
  data: {
    mdx: post,
    site: {
      siteMetadata: { title: siteTitle, siteUrl, disqusName },
    },
  },
  pageContext: { previous, next, slug },
  location,
}) => (
  <Layout location={location} title={siteTitle}>
    <SEO
      title={post.frontmatter.title}
      description={post.frontmatter.description || post.excerpt}
    />
    <h1>{post.frontmatter.title}</h1>
    <p>{post.frontmatter.date}</p>
    <MDXRenderer>{post.body}</MDXRenderer>
    <hr />

    <ul
      style={{
        display: `flex`,
        flexWrap: `wrap`,
        justifyContent: `space-between`,
        listStyle: `none`,
        padding: 0,
      }}
    >
      <li>
        {previous && (
          <Link to={`/blog${previous.fields.blogPath}`} rel="prev">
            ← {previous.frontmatter.title}
          </Link>
        )}
      </li>
      <li>
        {next && (
          <Link to={`/blog${next.fields.blogPath}`} rel="next">
            {next.frontmatter.title} →
          </Link>
        )}
      </li>
    </ul>
    <DiscussionEmbed
      shortname={disqusName}
      config={{
        url: siteUrl,
        identifier: slug,
        title: post.frontmatter.title,
      }}
    />
  </Layout>
)

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        siteUrl
        disqusName
      }
    }
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        description
      }
    }
  }
`
