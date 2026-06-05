/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://tcs-rust.vercel.app',
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
    ],
  },
  exclude: ['/_not-found'],
}
