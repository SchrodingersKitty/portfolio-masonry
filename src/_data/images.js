const glob = require("fast-glob");
const Image = require("@11ty/eleventy-img");

async function generateResponsiveImages(file) {
  let data = await Image(file, {
    widths: ['auto', 360, 420, 800, 1280, 1440, 1920],
    formats: ['webp'],
    outputDir: './_site/img/',
    urlPath: '/img/'
  });
  return data['webp'].sort((a, b) => a.width - b.width);
}

module.exports = async () => {
  let files = await glob('src/img/**/*');
  let jobs = files.map(async f => {
    let images = await generateResponsiveImages(f);
    let tokens = f.split('/');
    let path = '/' + tokens.slice(1).join('/');
    return {
      url: path,
      original: images[images.length - 1],
      srcset: images.map(i => i.srcset).join(','),
      images: images
    }
  });
  return await Promise.all(jobs);
}