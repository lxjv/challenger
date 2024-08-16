import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@lib/siteConfig";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const posts = await getCollection("notes");

    return rss({
        title: siteConfig.meta.title,
        description: siteConfig.meta.description,
        site: context.site,
        items: posts.map((post) => ({
            pubDate: post.data.pubDate,
            link: `/notes/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
            ...post.data,
        })),
        customData: `<language>en-us</language>`,
    });
}
