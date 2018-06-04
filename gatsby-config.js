module.exports = {
 siteMetadata: {
    title: `Panda life`,
  },
  plugins: [
    {
     resolve: `gatsby-source-filesystem`,
     options: {
        name: `src`,
        path: `${__dirname}/src/`,
     },
    },
    `gatsby-transformer-remark`,
    `gatsby-plugin-glamor`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
  ],
};