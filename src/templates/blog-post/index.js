import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link, useIntl } from 'gatsby-plugin-intl'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import SupportArea from '../../components/support-area'

const BlogPostTemplate = ({
  data: {
    mdx: post,
    site: {
      siteMetadata: { siteUrl, disqusName },
    },
  },
  pageContext: { previous, next, slug },
  location,
}) => {
  const intl = useIntl()

  return (
    <Layout location={location}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        lang={intl.locale}
        url={location.href}
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
          {next && (
            <Link to={`/blog${next.fields.blogPath}`} rel="next">
              ← {next.frontmatter.title}
            </Link>
          )}
        </li>
        <li style={{ marginLeft: 'auto' }}>
          {previous && (
            <Link to={`/blog${previous.fields.blogPath}`} rel="prev">
              {previous.frontmatter.title} →
            </Link>
          )}
        </li>
      </ul>
      <ul
        style={{
          display: `flex`,
          justifyContent: `center`,
          listStyle: `none`,
          padding: 0,
        }}
      >
        <li>
          <Link to={`/`}>{intl.formatMessage({ id: 'backToHome' })}</Link>
        </li>
      </ul>
      <SupportArea url={location.href} title={post.frontmatter.title} />
      <hr />
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
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
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
