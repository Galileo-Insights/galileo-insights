module.exports = {
	siteMetadata: {
		title: `Galileo Insights`,
		description: `Our team grew up building bulletproof software that runs Fortune 20 companies. We left corporate America because we wanted to go faster, be nimble, and experiment. We like innovating on game-changing products with game-changing people.`,
		author: `Galileo Insights`,
	},
	plugins: [
		{
			resolve: `gatsby-plugin-styled-components`,
			options: {
				minify: false, // Breaks styles if not set to false
			},
		},
		`gatsby-plugin-react-helmet`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/images`,
			},
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `common`,
				path: `../common/src/assets/`,
			},
		},
		`gatsby-transformer-json`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `data`,
				path: `../common/src/data/`,
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
				background_color: `#52bd95`,
				theme_color: `#52bd95`,
				display: `minimal-ui`,
				icon: `src/images/galileo-favicon.png`, // This path is relative to the root of the site.
			},
		}
		// this (optional) plugin enables Progressive Web App + Offline functionality
		// To learn more, visit: https://gatsby.app/offline
		// 'gatsby-plugin-offline',
	],
};
