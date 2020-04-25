/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */
const path = require('path');

module.exports = {
  plugins: [
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200,
              withWebp: {
                quality: 100
              },
              quality: 100,
              linkImagesToOriginal: false
            },
          },
        ],
      },
    },
    ...([
      {name: 'images',   relPath: 'images'},
      {name: 'posts',     relPath: 'posts'},
    ].map(({name, relPath}) => ({
      resolve: `gatsby-source-filesystem`,
      options: {
        name,
        path: path.join(__dirname, 'src/data', relPath)
      },
    }))),
    {
      resolve: `gatsby-plugin-webfonts`,
      options: {
        fonts: {
          google: ["Lora", "Muli"].map((family) => ({
            family,
            variants: ["400", "700"]
          }))
        },
      },
    }
  ]
}
