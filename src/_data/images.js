const glob = require("fast-glob");
const Image = require("@11ty/eleventy-img");

async function generateThumbnail(file) {
  let data = await Image(file, {
    widths: [640],
    formats: ['webp'],
    outputDir: './_site/thumb/',
    urlPath: '/thumb/'
  });
  return data['webp'][0];
}

module.exports = async () => {
  let files = await glob('src/img/**/*');
  let jobs = files.map(async f => {
    let thumb = await generateThumbnail(f);
    let tokens = f.split('/');
    let path = '/' + tokens.slice(1).join('/');
    return {
      url: path,
      thumb: thumb
    }
  });
  return await Promise.all(jobs);
}