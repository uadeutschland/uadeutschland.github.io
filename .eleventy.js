const markdownIt = require("markdown-it");
const pluginSEO = require("eleventy-plugin-seo");

module.exports = function (eleventyConfig) {
  let options = {
    html: true,
    breaks: false,
    linkify: true,
  };
  eleventyConfig.addPlugin(pluginSEO, require("./_data/seo.json"));
  eleventyConfig.setLiquidOptions({
    dynamicPartials: false,
    root: ["_includes", "."],
  });
  eleventyConfig.addPassthroughCopy("assets");
  eleventyConfig.setLibrary("md", markdownIt(options));
  return {
    dir: {
      input: "./",
      output: "./_site",
    },
    passthroughFileCopy: true,
  };
};
