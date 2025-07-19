const carousel = document.getElementbyId('carousel');
function scrollCarousel(direction){
    const itemWidth = carousel.querySelector('.carousel-item').offsetWidth + 20;
    carousel.scrollBy({
        left:direction*itemWidth,
        behavior:'smooth'
   } );
}
   
