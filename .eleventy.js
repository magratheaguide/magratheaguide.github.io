const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("excludeOne", (array, exclusion) => {
		let result = array.filter((item) => item != exclusion);
		return result;
	});

	eleventyConfig.addPlugin(eleventyNavigationPlugin);

	eleventyConfig.addPassthroughCopy("source/_assets");

	return {
		dataTemplateEngine: "njk",
		dir: {
			input: "source",
			output: "_distribution",
		},
		htmlTemplateEngine: "njk",
		markdownTemplateEngine: "njk",
	};
};
