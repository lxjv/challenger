import type { APIRoute } from "astro";

const getRobotsTxt = (sitemapURL: URL) => `
User-agent: Amazonbot
User-agent: anthropic-ai
User-agent: Applebot-Extended
User-agent: Bytespider
User-agent: CCBot
User-agent: ChatGPT-User
User-agent: ClaudeBot
User-agent: Claude-Web
User-agent: cohere-ai
User-agent: Diffbot
User-agent: FacebookBot
User-agent: facebookexternalhit
User-agent: FriendlyCrawler
User-agent: Google-Extended
User-agent: GoogleOther
User-agent: GoogleOther-Image
User-agent: GoogleOther-Video
User-agent: GPTBot
User-agent: ICC-Crawler
User-agent: ImagesiftBot
User-agent: img2dataset
User-agent: Meta-ExternalAgent
User-agent: OAI-SearchBot
User-agent: omgili
User-agent: omgilibot
User-agent: PerplexityBot
User-agent: PetalBot
User-agent: Scrapy
User-agent: Timpibot
User-agent: VelenPublicWebCrawler
User-agent: YouBot
User-agent: Meta-ExternalFetcher
User-agent: Applebot
Disallow: /

Sitemap: ${sitemapURL.href}
`;

export const GET: APIRoute = ({ site }) => {
    const sitemapURL = new URL("sitemap-index.xml", site);
    return new Response(getRobotsTxt(sitemapURL));
};
