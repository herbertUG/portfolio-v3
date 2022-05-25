const config = require('./src/config');

require('dotenv').config({
  path: `.env.${process.env.NODE_ENV}`,
});
const strapiConfig = {
  apiURL: process.env.GATSBY_STRAPI_URL,
  collectionTypes: [{
    singularName: "portfolio",
    queryParams: {
      publicationState: "live",
      populate: {
        profile: { populate: "*" },
        career_path: "*",
        projects: { populate: "*"}
      }
    }
  }],
  singleTypes: [],
};

module.exports = {
  siteMetadata: {
    title: process.env.TITLE,
    description: process.env.DESCRIPTION,
    siteUrl: process.env.SITEURL,
    telegramUserName: process.env.TELEGRAM_USERNAME,
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
        name: process.env.NAME,
        short_name: process.env.SHORT_NAME,
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
