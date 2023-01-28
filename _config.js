import lume from "lume/mod.ts";
import { createSlugifier } from "lume/plugins/slugify_urls.ts";

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
	.loadAssets([".css"]);

export default site;
