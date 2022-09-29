import lume from "lume/mod.ts";
import { createSlugifier } from "lume/plugins/slugify_urls.ts";
import beautify from "jsBeautify";

import anchorHeadings from "./plugins/anchor_headings.ts";

const site = lume({
	dest: "./_distribution",
	location: new URL("https://magrathea.guide"),
	src: "./source",
});

site.filter("slugify", (text) => createSlugifier()(text))
	.use(
		anchorHeadings({
			queryString: ":is(h2, h3)[data-anchor-heading]",
		})
	)
	.process([".html"], function (page) {
		page.content = beautify.html(page.content);
	})
	.loadAssets([".css"])
	.process([".css"], function (page) {
		page.content = beautify.css(page.content);
	});

export default site;
