const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const sass = require("eleventy-sass");

module.exports = config => {
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(sass);
  config.addPassthroughCopy('./src/fonts');
  config.addPassthroughCopy({ './node_modules/photoswipe/dist/photoswipe-lightbox.esm.min.js': 'js/photoswipe-lightbox.esm.min.js' });
  config.addPassthroughCopy({ './node_modules/photoswipe/dist/photoswipe.esm.min.js': 'js/photoswipe.esm.min.js' });
  config.addPassthroughCopy({ './node_modules/photoswipe/dist/photoswipe.css': 'css/photoswipe.css' });
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
    pathPrefix: ''
  };
};
