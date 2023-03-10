const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const sass = require("eleventy-sass");

module.exports = config => {
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(sass);
  config.addPassthroughCopy({
    './src/fonts': 'fonts/',
    './node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js': 'js/photoswipe-lightbox.esm.min.js',
    './node_modules/photoswipe/dist/photoswipe.esm.min.js': 'js/photoswipe.esm.min.js',
    './node_modules/photoswipe/dist/photoswipe.css': 'css/photoswipe.css',
    './node_modules/@fortawesome/fontawesome-free/webfonts': 'webfonts',
    './node_modules/@fortawesome/fontawesome-free/css/fontawesome.min.css': 'css/fontawesome.min.css',
    './node_modules/@fortawesome/fontawesome-free/css/brands.min.css': 'css/brands.min.css',
    './node_modules/@fortawesome/fontawesome-free/css/solid.min.css': 'css/solid.min.css'
  });
  config.addFilter('findURL', (url, collection) => {
    return collection.find(i => i.url == url);
  });
  return {
    markdownTemplateEngine: 'njk',
    dataTemplateEngine: 'njk',
    htmlTemplateEngine: 'njk',
    dir: {
      input: 'src'
    },
    pathPrefix: '/'
  };
};
