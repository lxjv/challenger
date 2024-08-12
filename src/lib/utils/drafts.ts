import { siteConfig } from "@lib/siteConfig";
import type { CollectionEntry } from "astro:content";

export const getPublishedAndSortedPosts = (
    allPosts: CollectionEntry<"blog">[],
) => {
    return allPosts
        .filter((post) => {
            if (import.meta.env.PROD) {
                return !post.data.draft;
            }

            return siteConfig.devMode.showDraftPages
                ? true
                : !post.data.draft;
        })
        .sort((post1, post2) => {
            if (isDateBefore(post1.data.pubDate, post2.data.pubDate)) {
                return 1;
            } else {
                return -1;
            }
        });
};
export const getPublishedAndSortedNotes = (allPosts: CollectionEntry<"notes">[]) => {
    return allPosts
        .filter((post) => {
            if (import.meta.env.PROD) {
                return !post.data.draft;
            }

            return siteConfig.devMode.showDraftPages ? true : !post.data.draft;
        })
        .sort((post1, post2) => {
            if (isDateBefore(post1.data.pubDate, post2.data.pubDate)) {
                return 1;
            } else {
                return -1;
            }
        });
};

// helper function to check if date1 is before date2
export const isDateBefore = (date1: Date, date2: Date) =>
    date1.getTime() < date2.getTime();
