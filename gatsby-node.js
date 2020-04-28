const path = require(`path`)
const { createFilePath } = require(`gatsby-source-filesystem`)

const removeMarkdownFileEnding = (path) => path.replace(/index.(en|de)\/$/, '')
const getLanguageFromPath = (path) => {
  const lang = path.match(/\.(de|en)\/$/)
  return lang ? lang[1] : ''
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })

    createNodeField({
      name: `slug`, // used to query blog details on blog-post.js (unique)
      node,
      value,
    })

    createNodeField({
      name: `blogPath`, // used to link to other blogs (not unique)
      node,
      value: removeMarkdownFileEnding(value),
    })

    createNodeField({
      name: `language`, // used to filter articles on homepage
      node,
      value: getLanguageFromPath(value),
    })
  }
}

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions

  const blogPost = path.resolve(`./src/templates/blog-posts/index.js`)
  return graphql(
    `
      {
        allMdx(
          sort: { fields: [frontmatter___date], order: DESC }
          limit: 1000
        ) {
          edges {
            node {
              fields {
                slug
                blogPath
                language
              }
              frontmatter {
                title
              }
            }
          }
        }
      }
    `
  ).then((result) => {
    if (result.errors) {
      throw result.errors
    }

    const posts = result.data.allMdx.edges

    // needed to correctly link to next and previous
    const postsByLang = posts.reduce((acc, post) => {
      const postLang = post.node.fields.language

      if (acc[postLang]) {
        return {
          ...acc,
          [postLang]: [...acc[postLang], post],
        }
      }

      return {
        ...acc,
        [postLang]: [post],
      }
    }, {})

    Object.values(postsByLang).forEach((postsArray) =>
      postsArray.forEach((post, index) => {
        const previous =
          index === postsArray.length - 1 ? null : postsArray[index + 1].node
        const next = index === 0 ? null : postsArray[index - 1].node

        createPage({
          path: `blog${post.node.fields.slug}`,
          component: blogPost,
          context: {
            slug: post.node.fields.slug,
            previous,
            next,
          },
        })
      })
    )

    return null
  })
}

exports.onCreatePage = async ({
  page,
  actions: { createPage, deletePage },
}) => {
  // no dynamic (blog) page
  if (page.isCreatedByStatefulCreatePages) {
    return
  }

  // blog pages (e.g. web-server/index.en.md)
  const intlAndFileLang = page.path.match(/\/(en|de).*\.(en|de)\//)

  if (!intlAndFileLang) {
    deletePage(page)
    return
  }

  const [_, intlLang, fileLang] = intlAndFileLang

  if (intlLang === fileLang) {
    createPage({
      ...page,
      path: removeMarkdownFileEnding(page.path),
    })
    deletePage(page)
  } else {
    deletePage(page)
  }
}
