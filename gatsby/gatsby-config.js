/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Mendl`,
    siteUrl: `https://www.yourdomain.tld`,
    description: `Deli Judio, platillos tipicos, bagels, salmon ahumado, vinos naturales, repostería, desayunos en Condesa Ciudad de México.`,
    twitterUsername: `@mendl`,
    image: `./src/assets/images/screenshot.png`,
    author: `mendl`
  },
  plugins: ["gatsby-plugin-styled-components", "gatsby-plugin-image", "gatsby-plugin-sitemap", {
    resolve: 'gatsby-plugin-manifest',
    options: {
      "icon": "src/assets/images/icon.png"
    }
  }, "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/assets/images/"
    },
    __key: "images"
  }]
};