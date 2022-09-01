const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");

module.exports = function (eleventyConfig) {
	eleventyConfig.addFilter("excludeOne", (array, exclusion) => {
		return array.filter((item) => item != exclusion);
	});

	eleventyConfig.addFilter("stringifyList", (array) => {
		// If any of the elements already contains a comma...
		if (array.join(" ").includes(",")) {
			// ...then separate elements with semicolons
			return array.join("; ");
		} else {
			return array.join(", ");
		}
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
