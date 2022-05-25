/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const path = require('path');
const _ = require('lodash');
const axios = require('axios');
const qs = require('qs')
const STRAPI_URL = process.env.GATSBY_STRAPI_URL

const fetchFromStrapi = (apiId, query = '') => {
  return axios.get(`${STRAPI_URL}/api/${apiId}/${query}`)
}

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;
  const query = qs.stringify({
    populate: {
      profile: { populate: '*' },
      career_path: { populate: '*' },
      projects: { populate: '*' }
    } 
  }, {
    encodeValuesOnly: true,
  });
  const profile = await fetchFromStrapi('portfolios', `1?${query}`)
  createPage({
    path: '/',
    component: path.resolve('./src/templates/profile.js'),
    context: {
      ...profile.data
    },
  })
};

// https://www.gatsbyjs.org/docs/node-apis/#onCreateWebpackConfig
exports.onCreateWebpackConfig = ({ stage, loaders, actions }) => {
  // https://www.gatsbyjs.org/docs/debugging-html-builds/#fixing-third-party-modules
  if (stage === 'build-html') {
    actions.setWebpackConfig({
      module: {
        rules: [
          {
            test: /scrollreveal/,
            use: loaders.null(),
          },
          {
            test: /animejs/,
            use: loaders.null(),
          },
        ],
      },
    });
  }

  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@config': path.resolve(__dirname, 'src/config'),
        '@fonts': path.resolve(__dirname, 'src/fonts'),
        '@hooks': path.resolve(__dirname, 'src/hooks'),
        '@pages': path.resolve(__dirname, 'src/pages'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@utils': path.resolve(__dirname, 'src/utils'),
      },
    },
  });
};
