import React from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image';
import Layout from '../components/layout';
import theme from './about.module.css';

export default ({ data }) => (
  <Layout selected="about">
    <div className={theme['about']}>
      <h1 className={theme['hd']}>About Jon</h1>
      <p>Hello! My name is Jonathan. Most people call me Jon.</p>
      <Img className={theme['img']} alt="Jon sits near a banyan tree" fixed={data.file.childImageSharp.fixed} />
      <div className={theme['txt2']}>
        <p>
          I am a software engineering co-op at Curriculum Associates Inc.
          and a senior Computer Science student at UMass Lowell.
          I'm interested in functional programming, distributed systems, and web development.
        </p>
        <p>
          I'm also really into gardening. <span role="img" aria-label="flower emoji">&#127804;</span>
        </p>
      </div>
    </div>
  </Layout>
)

export const query = graphql`
  query {
    file(relativePath: { eq: "jon.jpg" }) {
      childImageSharp {
        fixed(width: 220, quality: 100) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
  }
`
