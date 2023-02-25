import PhotoSwipeLightbox from '{{ "/js/photoswipe-lightbox.esm.min.js" | url }}';
const lightbox = new PhotoSwipeLightbox({
  gallery: '#gallery',
  children: 'a',
  mainClass: 'lightbox-main',
  imageClickAction: (point, e) => {
    const pswp = lightbox.pswp;
    pswp.currSlide?.toggleZoom(point);
    pswp.element?.classList.toggle('pswp--ui-visible');
  },
  pswpModule: () => import('{{ "/js/photoswipe.esm.min.js" | url }}')
});
lightbox.init();