const markdownIt = require("markdown-it");

module.exports = function(eleventyConfig) {
  let options = {
    html: true,
    breaks: true,
    linkify: true
  };

  eleventyConfig.setLibrary("md", markdownIt(options));
};
