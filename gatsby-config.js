module.exports = {
  siteMetadata: {
    title: `Neal Gardner Portfolio`,
    description: ``,
    author: `Neal P Gardner`,
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`, `gatsby-plugin-layout`,
    `gatsby-plugin-sharp`,{
      resolve: 'gatsby-plugin-web-font-loader',
      options: {
        typekit: {
          id: 'skl0kuq'
        }
      }
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#191919`,
        theme_color: `#191919`,
        display: `minimal-ui`,
        icon: `src/images/npg-favicon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-39300092-2",
        head: false,
      },
    },
  ],
}
