import React from 'react';
import { graphql, Link } from 'gatsby';
import Layout from '../components/layout';
import theme from './projects.module.css';
import Img from 'gatsby-image';


export default ({ data }) => {
  // Flatten data 
  const projects = data.allMarkdownRemark.edges.map(({ node }) => ({
    ...node,
    ...node.frontmatter,
    thumb: node.frontmatter.thumb.childImageSharp.fixed
  }));
  return (
    <Layout selected="projects">
      <h1>Here's some stuff that I've been working on</h1>
      <p>There's not much here right now... check back later!</p>
      <div className={theme['cards']}>
        {projects.map(project => (
          <Link 
            to={project.fields.slug}
            key={`card-${project.id}`} 
            className={theme['card']}
          >
            <Img fixed={project.thumb} alt={project.thumbAlt} />
            <div className={theme['cardContent']}>
              <h3>{project.frontmatter.title}</h3>
              <p>{project.frontmatter.summary}</p>
              <div className={theme['tags']}>
                {project.frontmatter.tags.map(tag => (
                  <span 
                    key={`card-${project.id}-tag-${tag}`}
                    className={theme['tag']}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </Link>
        ))}
      </div>

    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(filter: {fileAbsolutePath: {regex: "/posts\/projects\/.*/"}}) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            tags
            summary
            thumbAlt
            thumb {
              childImageSharp {
                fixed(width: 350, quality: 100) {
                  ...GatsbyImageSharpFixed_withWebp
                }
              }
            }
          }
        }
      }
    }
  }
`
