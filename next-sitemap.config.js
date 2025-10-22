/** @type {import('next-sitemap').IConfig} */
const config = {
  siteUrl: "https://rhythmitaliya.com",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  additionalPaths: async (config) => [
    await config.transform(config, "/about"),
    await config.transform(config, "/skills"),
    await config.transform(config, "/projects"),
    await config.transform(config, "/education"),
    await config.transform(config, "/contact"),
  ],
};

module.exports = config;
