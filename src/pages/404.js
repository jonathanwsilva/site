import React from 'react'
import Layout from '../components/layout';
import theme from './404.module.css';

export default () => (
    <Layout>
        <div className={theme['wumboWrapper']}>
            <h1 className={theme['wumbo']}>
                404
            </h1>
            <p>page not found</p>
        </div>
    </Layout>
);