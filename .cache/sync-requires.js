// prefer default export if available
const preferDefault = m => m && m.default || m


exports.layouts = {
  "layout---index": preferDefault(require("/Users/victoriasloan/Development/nidevconf-demo/.cache/layouts/index.js"))
}

exports.components = {
  "component---src-templates-blog-post-js": preferDefault(require("/Users/victoriasloan/Development/nidevconf-demo/src/templates/blog-post.js")),
  "component---cache-dev-404-page-js": preferDefault(require("/Users/victoriasloan/Development/nidevconf-demo/.cache/dev-404-page.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/victoriasloan/Development/nidevconf-demo/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/victoriasloan/Development/nidevconf-demo/src/pages/index.js")),
  "component---src-pages-my-files-js": preferDefault(require("/Users/victoriasloan/Development/nidevconf-demo/src/pages/my-files.js"))
}

exports.json = {
  "layout-index.json": require("/Users/victoriasloan/Development/nidevconf-demo/.cache/json/layout-index.json"),
  "panda-eating-banana.json": require("/Users/victoriasloan/Development/nidevconf-demo/.cache/json/panda-eating-banana.json"),
  "panda-eating-carrot.json": require("/Users/victoriasloan/Development/nidevconf-demo/.cache/json/panda-eating-carrot.json"),
  "sliding-pandas.json": require("/Users/victoriasloan/Development/nidevconf-demo/.cache/json/sliding-pandas.json"),
  "dev-404-page.json": require("/Users/victoriasloan/Development/nidevconf-demo/.cache/json/dev-404-page.json"),
  "about.json": require("/Users/victoriasloan/Development/nidevconf-demo/.cache/json/about.json"),
  "index.json": require("/Users/victoriasloan/Development/nidevconf-demo/.cache/json/index.json"),
  "my-files.json": require("/Users/victoriasloan/Development/nidevconf-demo/.cache/json/my-files.json")
}