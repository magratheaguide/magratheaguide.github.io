import lume from "lume/mod.ts";
import anchorHeadings from "./plugins/anchor_headings.ts";
import { createSlugifier } from "lume/plugins/slugify_urls.ts";

const site = lume({
	dest: "./_distribution",
	location: new URL("https://magrathea.guide"),
	src: "./source",
});

const slugify = createSlugifier();

site.filter("slugify", (text) => slugify(text))
	.loadAssets([".css"])
	.use(
		anchorHeadings({
			queryString: ":is(h2, h3)[data-anchor-heading]",
		})
	);

export default site;
