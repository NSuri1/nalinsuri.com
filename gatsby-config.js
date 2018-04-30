module.exports = {
  plugins: [
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `open sans\:300,600`
        ]
      }
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-118406104-1",
        head: true
      }
    },
  ],
  siteMetadata: {
    title: 'Nalin Suri',
    description: '',
    keywords: 'personal website',
    url: 'http://www.nalinsuri.com'
  }
};
