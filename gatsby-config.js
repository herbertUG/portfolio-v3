const config = require('./src/config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const strapiConfig = {
  apiURL: 'http://localhost:1337',
  collectionTypes: [{
    singularName: "portfolio",
    queryParams: {
      publicationState: "live",
      populate: {
        profile: { populate: "*" },
        career_path: "*",
        projects: "*"
      }
    }
  }],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: 'Richard Hong',
    description:
      'Richard Hong is a software engineer specializing in building (and occasionally designing) exceptional websites, applications, and everything in between.',
    siteUrl: 'https://richardhong.epizy.com', // No trailing slash allowed!
    telegramUserName: '@jena303',
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-offline`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'RichardHong',
        short_name: 'RichardHong',
        start_url: '/',
        background_color: config.colors.darkNavy,
        theme_color: config.colors.navy,
        display: 'minimal-ui',
        icon: 'src/images/logo.png',
      },
    },
    {
      resolve: `gatsby-source-strapi`,
      options: strapiConfig,
    }
  ],
};
