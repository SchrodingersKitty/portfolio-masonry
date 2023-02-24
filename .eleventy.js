const { EleventyHtmlBasePlugin } = require("@11ty/eleventy");
const sass = require("eleventy-sass");

module.exports = config => {
  config.addPlugin(EleventyHtmlBasePlugin);
  config.addPlugin(sass, {
    sass: {
      loadPaths: ['./node_modules/simplelightbox/src', './src/_includes']
    }
  });
  config.addPassthroughCopy('./src/img');
  config.addPassthroughCopy('./src/fonts');
  config.addPassthroughCopy({ './node_modules/simplelightbox/dist/simple-lightbox.min.js': 'js/simple-lightbox.min.js' });
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
