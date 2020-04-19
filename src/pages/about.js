import React from "react"
import Layout from '../components/layout';
import theme from './about.module.css';

export default () => (
    <Layout selected="About">
        <div className={theme['about']}>
            <h1>About Jon</h1>
            <p>Hello! My name is Jonathan. Most people call me Jon.</p>
            <img alt="Jon sits near a banyan tree" src='https://scontent-lga3-1.xx.fbcdn.net/v/t1.0-9/82384197_2870603016317175_3793107338194321408_n.jpg?_nc_cat=107&_nc_sid=110474&_nc_oc=AQlM1uaOnrcwDRN0ng6VrsoXGKp2L8qr9f6mj70z5g4O7bTx7QIyytgZmHYVy40cjWA&_nc_ht=scontent-lga3-1.xx&oh=f9dc258ec2f9f33a4521eb23f8d7baa0&oe=5EBFE209'></img>
            <div>
                <p>I'm a software engineering co-op at Curriculum Associates Inc. and a senior Computer Science student at UMass Lowell.</p>
                <p>I'm interested in functional programming, distributed systems, and web development. I'm also big on gardening.</p>
                <p>In the past I have studied Chemical Engineering and worked as a controls engineer in the biotech industry.</p>
            </div>
        </div>
    </Layout>
)
