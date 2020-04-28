import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Link, useIntl } from 'gatsby-plugin-intl'
import { DiscussionEmbed } from 'disqus-react'

import Layout from '../../components/layout'
import SEO from '../../components/seo'
import BuyMeACoffee from '../../components/buyMeACoffee'
import SocialShare from '../../components/social-share'
import { SupportArea } from './styles'

const BlogPostTemplate = ({
  data: {
    mdx: post,
    site: {
      siteMetadata: { title: siteTitle, siteUrl, disqusName },
    },
  },
  pageContext: { previous, next, slug },
  location,
}) => {
  const intl = useIntl()

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
        lang={intl.locale}
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
      <SupportArea>
        <BuyMeACoffee />
        <SocialShare url={location.href} title={post.frontmatter.title} />
      </SupportArea>
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
