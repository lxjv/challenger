// Import utilities from `astro:content`
import { z, defineCollection, reference } from "astro:content";
// Define a `type` and `schema` for each collection
const postsCollection = defineCollection({
    type: "content",
    schema: z.object({
        draft: z.boolean().default(false),
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

const notesCollection = defineCollection({
    type: "content",
    schema: z.object({
        pubDate: z.date(),
        pinned: z.boolean().default(false),
        tags: z.array(z.string()),
    }),
});

const projectsCollection = defineCollection({
    type: "content",
    schema: z.object({
        status: z.number().int().min(0).max(2),
        title: z.string(),
        pubDate: z.date().default("1970-01-01"),
        description: z.string().default("no description"),
        image: z
            .object({
                url: z.string(),
                alt: z.string(),
            })
            .optional(),
        tech: z.array(z.string()).optional(),
    }),
});

// Export a single `collections` object to register your collection(s)
export const collections = {
    blog: postsCollection,
    notes: notesCollection,
    projects: projectsCollection
};