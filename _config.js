import lume from "lume/mod.ts";

const site = lume({
	dest: "./_distribution",
	location: new URL("https://magrathea.guide"),
	src: "./source",
});

site.loadAssets([".css"]);

export default site;
