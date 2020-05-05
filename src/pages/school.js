import React from 'react'
import { graphql } from 'gatsby'
import { useIntl } from 'gatsby-plugin-intl'
import Image from 'gatsby-image'

import Layout from '../components/layout'
import SEO from '../components/seo'
import SupportArea from '../components/support-area'
import ContactForm from '../components/contact-form'
import { List, MaterialItem, PreviewImageLink } from '../pages-styles/school'

const School = ({ data: { file }, location }) => {
  const intl = useIntl()
  const title = intl.formatMessage({ id: 'teachingMaterial' })

  return (
    <Layout location={location}>
      <SEO
        title={title}
        lang={intl.locale}
        url={location.href}
        keywords={intl.formatMessage({ id: 'keywordsSchoolPage' }).split(', ')}
      />
      <h1>{title}</h1>

      {intl.locale === 'de' ? (
        <List>
          <MaterialItem>
            <PreviewImageLink
              href="https://docs.google.com/presentation/d/1iIx70wOGVOpBdq_X1oF3oGZWDA05COG35UaMABFbp3M/edit?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image fixed={file.childImageSharp.fixed} />
            </PreviewImageLink>
            <p>
              Die Präsentation geht Schritt für Schritt durch die Erstellung
              einer einfachen Webseite mit HTML und CSS. Die Seite wird am Ende
              im Internet veröffentlicht.
              <br />
              <br />
              <a
                href="https://docs.google.com/presentation/d/1iIx70wOGVOpBdq_X1oF3oGZWDA05COG35UaMABFbp3M/edit?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
              >
                Link zur Präsentation
              </a>
            </p>
          </MaterialItem>
        </List>
      ) : (
        <p>The teaching material is currently only available in German.</p>
      )}

      <hr />
      <br />

      <SupportArea schoolPage url={location.href} title={title} />

      <hr />
      <br />

      <h2>{intl.formatMessage({ id: 'improvements' })}?</h2>
      <p>{intl.formatMessage({ id: 'contactMeText' })}</p>

      <ContactForm />
    </Layout>
  )
}

export const pageQuery = graphql`
  query {
    file(relativePath: { eq: "images/website-presentation.png" }) {
      childImageSharp {
        fixed(width: 300) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default School
