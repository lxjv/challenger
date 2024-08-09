// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        draft: z.boolean().default(true),
        title: z.string(),
        pubDate: z.date(),
        description: z.string().default("no description"),
        relatedPosts: z.array(reference('blog')).optional(),
        pinned: z.boolean().default(false),
        author: z.string().default("Laker Turner"),
        image: z.object({
            url: z.string(),
            alt: z.string(),
        }).optional(),
        tags: z.array(z.string()),
    }),
});
// Export a single `collections` object to register your collection(s)
export const collections = {
    blog: postsCollection,
};
