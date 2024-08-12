import { getCollection } from "astro:content";
import { OGImageRoute } from "astro-og-canvas";
import { siteConfig } from "@lib/siteConfig";

const collectionEntries = await getCollection("blog");

// Map the array of content collection entries to create an object.
// Converts [{ id: 'post.md', data: { title: 'Example', description: '' } }]
// to { 'post.md': { title: 'Example', description: '' } }
const pages = Object.fromEntries(
    collectionEntries.map(({ slug, data }) => [slug, data]),
);

export const { getStaticPaths, GET } = OGImageRoute({
    param: "route",
    pages: pages,

    getImageOptions: (path, page) => ({
        title: page.title,
        description: page.description,
        logo: {
            path: siteConfig.author.photo.url,
        },
    }),
});
