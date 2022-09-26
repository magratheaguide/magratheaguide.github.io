import lume from "lume/mod.ts";
import { createSlugifier } from "lume/plugins/slugify_urls.ts";

const site = lume({
	dest: "./_distribution",
	location: new URL("https://magrathea.guide"),
	src: "./source",
});

const slugify = createSlugifier();

site.filter("slugify", (text) => slugify(text));

site.helper(
	"linkedHeading",
	(level, heading, id = null) => {
		/* Informed by:
			https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/
			and
			https://www.leereamsnyder.com/blog/making-headings-with-links-show-up-in-safari-reader
		*/

		if (!id) {
			id = slugify(heading);
		}

		return `<h${level} id="${id}">
	<a href="#${id}">
		<span>${heading}</span>
	</a>
</h${level}>`;
	},
	{ type: "tag" }
);

site.loadAssets([".css"]);

export default site;
