module.exports = function (eleventyConfig) {
	eleventyConfig.addPassthroughCopy("source/assets");

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
