module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
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
        start_url: `/`,
        icon: `src/images/logo/logo.png`,
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
      spaceId: 'ho4x05eilz16',
      accessToken: 'XKqR8U_cR9zSKcgg856h8OMy1zRUqNFG_QrrI3EdqZ0',
      },
    },
    {
      resolve: 'gatsby-plugin-react-leaflet',
      options: {
        linkStyles: true // (default: true) Enable/disable loading stylesheets via CDN
      }
    },
    `gatsby-plugin-fontawesome-css`,
    {
      resolve: "gatsby-plugin-flexsearch",
      options: {
        type: "ContentfulStoreProduct",
        fields: [
          {
            name: "id",
            indexed: true,
            resolver: "id",
            store: true, // In case you want to make the field available in the search results.
          },
          {
            name: "name",
            indexed: true,
            resolver: "name",
            attributes: {
              encode: "balance",
              tokenize: "forward",
              threshold: 6,
              depth: 3,
            },
            store: true, // In case you want to make the field available in the search results.
          }
        ],
      },
    },
  ],
}
