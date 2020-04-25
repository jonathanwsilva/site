import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout selected={post.fields.postType}>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <p>{post.frontmatter.summary}</p>
        <div  dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title,
        summary
      }
      fields {
        slug
        postType
      }
    }
  }
`