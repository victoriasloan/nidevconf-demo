// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---src-templates-blog-post-js": require("gatsby-module-loader?name=component---src-templates-blog-post-js!/Users/victoriasloan/Development/nidevconf-demo/src/templates/blog-post.js"),
  "component---cache-dev-404-page-js": require("gatsby-module-loader?name=component---cache-dev-404-page-js!/Users/victoriasloan/Development/nidevconf-demo/.cache/dev-404-page.js"),
  "component---src-pages-about-js": require("gatsby-module-loader?name=component---src-pages-about-js!/Users/victoriasloan/Development/nidevconf-demo/src/pages/about.js"),
  "component---src-pages-index-js": require("gatsby-module-loader?name=component---src-pages-index-js!/Users/victoriasloan/Development/nidevconf-demo/src/pages/index.js"),
  "component---src-pages-my-files-js": require("gatsby-module-loader?name=component---src-pages-my-files-js!/Users/victoriasloan/Development/nidevconf-demo/src/pages/my-files.js")
}

exports.json = {
  "layout-index.json": require("gatsby-module-loader?name=path---!/Users/victoriasloan/Development/nidevconf-demo/.cache/json/layout-index.json"),
  "panda-eating-banana.json": require("gatsby-module-loader?name=path---panda-eating-banana!/Users/victoriasloan/Development/nidevconf-demo/.cache/json/panda-eating-banana.json"),
  "panda-eating-carrot.json": require("gatsby-module-loader?name=path---panda-eating-carrot!/Users/victoriasloan/Development/nidevconf-demo/.cache/json/panda-eating-carrot.json"),
  "sliding-pandas.json": require("gatsby-module-loader?name=path---sliding-pandas!/Users/victoriasloan/Development/nidevconf-demo/.cache/json/sliding-pandas.json"),
  "dev-404-page.json": require("gatsby-module-loader?name=path---dev-404-page!/Users/victoriasloan/Development/nidevconf-demo/.cache/json/dev-404-page.json"),
  "about.json": require("gatsby-module-loader?name=path---about!/Users/victoriasloan/Development/nidevconf-demo/.cache/json/about.json"),
  "index.json": require("gatsby-module-loader?name=path---index!/Users/victoriasloan/Development/nidevconf-demo/.cache/json/index.json"),
  "my-files.json": require("gatsby-module-loader?name=path---my-files!/Users/victoriasloan/Development/nidevconf-demo/.cache/json/my-files.json")
}

exports.layouts = {
  "layout---index": require("gatsby-module-loader?name=component---src-layouts-index-js!/Users/victoriasloan/Development/nidevconf-demo/.cache/layouts/index.js")
}