module.exports = function (eleventyConfig) {
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
