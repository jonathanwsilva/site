import React from 'react';
import {graphql} from 'gatsby';
import Layout from '../components/layout';
import theme from './projects.module.css';

const zip = (...rows)=>rows[0].map((_,c)=>rows.map(row=>row[c]))

const metasyntactics = ["foo", "bar", "baz", "qux", "ham", "spam", "eggs"]
const smashmouthlyrics = `Fed to the rules and I hit the ground running
Didn't make sense not to live for fun
Your brain gets smart but your head gets dumb
So much to do, so much to see
So what's wrong with taking the back streets?
You'll never know if you don't go
You'll never shine if you don't glow`.split("\n")


const projects = zip(metasyntactics, smashmouthlyrics).map(([meta, lyric], idx) => ({
  id: idx,
  frontmatter: { title: meta },
  excerpt: lyric,
  tags: ['foo', 'bar', 'baz']
}));


export default ({data}) => {
    // const projects = data.allMarkdownRemark.edges.map(({node})=>node);
    return (
        <Layout selected="projects">
            {/* {`Hello world!\n${JSON.stringify(projects, null, 4)}`} */}
            <h1>Well, the years start coming and they don't stop coming</h1>
            {/* A small card - for when I eventually have many projects*/}
            <div className={theme['cards']}>
                {projects.map(project => (
                    <div key={project.id} className={theme['card']}>
                      <img src="https://consequenceofsound.net/wp-content/uploads/2019/06/Smash-Mouth.jpg?quality=80"></img>
                      <h2>{project.frontmatter.title}</h2>
                      {project.excerpt}
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
          }
          excerpt(pruneLength:20)
        }
      }
    }
  }  
`