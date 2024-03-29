import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'

const SEO = ({ lang, keywords, title, description, url }) => {
  const intl = useIntl()
  const { file } = useStaticQuery(
    graphql`
      query {
        file(relativePath: { eq: "images/globe-icon.png" }) {
          childImageSharp {
            fixed(width: 512, height: 512) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `
  )

  const blogTitle = intl.formatMessage({
    id: 'webDeveloperBlog',
  })
  const metaDescription =
    description ||
    intl.formatMessage({
      id: 'blogDescription',
    })

  // https://stackoverflow.com/questions/19778620/provide-an-image-for-whatsapp-link-sharing
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${blogTitle}`}
      meta={[
        {
          name: `description`,
          content: metaDescription.substr(0, 150),
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription.substr(0, 65),
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: file.childImageSharp.fixed.src,
        },
        {
          property: `og:url`,
          content: url,
        },
        {
          property: `og:locale`,
          content: intl.locale,
        },
        {
          property: `og:locale:alternate`,
          content: intl.locale === 'de' ? 'en' : 'de',
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: file.childImageSharp.fixed.src, // TODO: not working
        },
      ].concat(
        keywords && keywords.length > 0
          ? {
              name: `keywords`,
              content:
                keywords.join(`, `) +
                `, ${intl.formatMessage({
                  id: 'keywordsEachSite',
                })}`,
            }
          : []
      )}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  keywords: [],
  title: ``,
  description: ``,
  url: ``,
}

SEO.propTypes = {
  lang: PropTypes.string,
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  description: PropTypes.string,
  url: PropTypes.string.isRequired,
}

export default SEO
