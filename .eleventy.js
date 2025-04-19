const { DateTime } = require("luxon");
const markdownIt = require("markdown-it");

module.exports = function (eleventyConfig) {
  eleventyConfig.addPassthroughCopy("src/media");

  eleventyConfig.addFilter("formatDate", (dateObj) => {
    return `${dateObj.getDate()}\/${dateObj.getMonth() + 1}`;
  });

  eleventyConfig.addFilter("htmlDateString", (dateObj) => {
    return DateTime.fromJSDate(dateObj, { zone: "utc" }).toFormat("yyyy-LL-dd");
  });

  eleventyConfig.addCollection("projects", function (collectionApi) {
    return collectionApi.getFilteredByGlob("src/projects/*.md").reverse();
  });

  let markdownOptions = {
    html: true,
    breaks: true,
    linkify: true,
  };
  let markdownLib = new markdownIt(markdownOptions);

  //Add div around tables
  (markdownLib.renderer.rules.table_open = () =>
    '<div class="table-wrapper">\n<table>\n'),
    (markdownLib.renderer.rules.table_close = () => "</table>\n</div>"),
    eleventyConfig.setLibrary("md", markdownLib);

  return {
    dir: { input: "src", output: "_site" },
  };
};
