import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { siteConfig } from "@lib/siteConfig";
import sanitizeHtml from 'sanitize-html';
import MarkdownIt from 'markdown-it';
const parser = new MarkdownIt();

export async function GET(context) {
    const posts = await getCollection("blog");

    return rss({
        title: siteConfig.meta.title,
        description: siteConfig.meta.description,
        site: context.site,
        stylesheet: "/rss.xsl",
        items: posts.map((post) => ({
            title: post.data.title,
            pubDate: post.data.pubDate,
            description: post.data.description,
            link: `/blog/${post.slug}/`,
            content: sanitizeHtml(parser.render(post.body), {
                allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img'])
            }),
            ...post.data,
        })),
        customData: `<language>en-us</language>`,
    });
}
