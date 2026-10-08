export default function (eleventyConfig) {
  // Static files copied as-is to the output folder.
  eleventyConfig.addPassthroughCopy("src/assets");
  eleventyConfig.addPassthroughCopy("src/favicon.svg");
  eleventyConfig.addPassthroughCopy("src/CNAME");

  // Absolute URL helper for canonical links, Open Graph tags and the sitemap.
  eleventyConfig.addFilter("absoluteUrl", (path, base) => new URL(path, base).href);

  // ISO date for the sitemap.
  eleventyConfig.addFilter("isoDate", (date) => new Date(date).toISOString().slice(0, 10));

  return {
    dir: {
      input: "src",
      includes: "_includes",
      data: "_data",
      output: "_site",
    },
    templateFormats: ["njk", "md"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
}
