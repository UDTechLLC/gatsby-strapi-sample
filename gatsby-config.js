if (process.env.NODE_ENV === `development`) {
  // eslint-disable-next-line global-require
  require('dotenv').config() // if in development environment - read .env file
}

module.exports = {
  siteMetadata: {
    title: `Cypress.io`,
    siteUrl:
      process.env.NODE_ENV === `development`
        ? `http://localhost`
        : `https://cypress.io`,
    description: `Fast, easy and reliable testing for anything that runs in a browser. Install Cypress in seconds and take the pain out of front-end testing.`,
    author: ``,
  },
  plugins: [
    `gatsby-plugin-styled-components`,
    `gatsby-background-image`,
    `gatsby-plugin-react-svg`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#162332`,
        theme_color: `#162332`,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      // Contentful connection
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT,
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // 'gatsby-plugin-offline',
    '@contentful/gatsby-transformer-contentful-richtext',
  ],
}
