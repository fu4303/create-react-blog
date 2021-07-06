module.exports = {
  meta: {
    title: "⚡️ Create React App Blog",
    description:
      "Web Dev Tools, Productivity Tips & Stories About My Journey to Become a Developer",
    lang: "en",
    siteUrl: "https://create-react-blog.vercel.app",
  },
  feed: {
    // used in feed.xml.njk
    subtitle:
      "Web Dev Tools, Productivity Tips & Stories About My Journey to Become a Developer",
    filename: "atom.xml",
    path: "/atom.xml",
    id: "https://create-react-app.com",
    authorName: "ABC",
    authorEmail: "iarenotamnot@gmail.com",
  },
  hero: {
    // used in hero section of main page ie. index.html.njk
    title: "Create React App",
    description:
      "Web Dev Tools, Productivity Tips & Stories About My Journey to Become a Developer",
  },
};
