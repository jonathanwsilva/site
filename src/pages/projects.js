import React from 'react';
import { graphql } from 'gatsby';
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
          <div 
            key={`card-${project.id}`} 
            className={theme['card']}
            role="button"
          >
            <Img fixed={project.thumb} />
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
          </div>
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
          frontmatter {
            title
            tags
            summary
            thumb {
              childImageSharp {
                fixed(width: 350, quality: 100) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
        }
      }
    }
  }
`
