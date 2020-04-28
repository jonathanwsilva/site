const path = require('path');
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark'){
    const slug = createFilePath({ node, getNode })
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    })
    const postType = slug.split(path.sep).filter(str => str)[0]
    createNodeField({
      node,
      name: 'postType',
      value: postType,
    })
  }
}

exports.createPages = async function ({ actions, graphql }) {
  const { data } = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node {
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  data.allMarkdownRemark.edges.forEach(edge => {
    const {slug} = edge.node.fields
    actions.createPage({
      path: slug,
      component: require.resolve(`./src/templates/post.js`),
      context: { slug: slug },
    })
  })
  // Temporarily redirect / to /about
  actions.createRedirect({
    fromPath: "/", 
    toPath: "/about", 
    isPermanent: true, 
    force: true
  });
}