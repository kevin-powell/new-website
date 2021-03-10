const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const Image = require("@11ty/eleventy-img");
const markdownIt = require("markdown-it");
// const syntaxHighlight = require("@11ty/eleventy-plugin-syntaxhighlight");
const codeStyleHooks = require("eleventy-plugin-code-style-hooks");
const { DateTime } = require("luxon");
const pluginRss = require("@11ty/eleventy-plugin-rss");

async function imageShortcode(src, alt, sizes) {
  let metadata = await Image(src, {
    widths: [300, 600],
    formats: ["avif", "webp", "jpeg"],
    outputDir: "./public/img",
  });

  let imageAttributes = {
    alt,
    sizes,
    loading: "lazy",
    decoding: "async",
  };

  // You bet we throw an error on missing alt in `imageAttributes` (alt="" works okay)
  return Image.generateHTML(metadata, imageAttributes, {
    whitespaceMode: "inline",
  });
}

module.exports = function (eleventyConfig) {
  eleventyConfig.addWatchTarget("./src/sass/");
  eleventyConfig.addPassthroughCopy("./src/js");
  eleventyConfig.addPassthroughCopy("./src/favicon.ico");
  eleventyConfig.addPassthroughCopy("./src/fonts");
  eleventyConfig.addPassthroughCopy("./src/img");
  eleventyConfig.addPassthroughCopy("./src/admin");
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  // eleventyConfig.addPlugin(syntaxHighlight);
  eleventyConfig.addPlugin(codeStyleHooks);
  eleventyConfig.addNunjucksAsyncShortcode("image", imageShortcode);
  eleventyConfig.addLiquidShortcode("image", imageShortcode);
  eleventyConfig.addJavaScriptFunction("image", imageShortcode);
  eleventyConfig.addFilter("md", function (content = "") {
    return markdownIt({ html: true }).render(content);
  });
  eleventyConfig.addFilter("postDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "America/Toronto",
    }).toLocaleString(DateTime.DATE_MED);
  });
  eleventyConfig.addFilter("toISO", (dateObj) => {
    return DateTime.fromJSDate(dateObj, {
      zone: "America/Toronto",
    }).toISODate();
  });
  eleventyConfig.setFrontMatterParsingOptions({
    excerpt: true,
    excerpt_separator: "<!--more-->",
  });
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);
  eleventyConfig.addPlugin(pluginRss, {
    posthtmlRenderOptions: {
      closingSingleTag: "default", // opt-out of <img/>-style XHTML single tags
    },
  });
  return {
    dir: {
      input: "src",
      output: "public",
    },
  };
};
