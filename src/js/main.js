import MainSlider from './modules/slider/slider-main';
import VideoPlayer from './modules/playVideo';
import MiniSlider from './modules/slider/slider-mini';
import Modules from './modules/modules';

window.addEventListener('DOMContentLoaded', () => {
    const slider = new MainSlider({btns: '.next', container: '.page'});
    slider.render();
    
    const sliderMini = new MiniSlider({
        container: '.showup__content-slider', 
        next: '.showup__next', 
        prev: '.showup__prev',
        activeClass: 'card-active',
        animate: true
    });
    sliderMini.init();

    const sliderModules = new MiniSlider({
        container: '.modules__content-slider', 
        next: '.modules__info-btns .slick-next',
        prev: '.modules__info-btns .slick-prev',
        activeClass: 'card-active',
        animate:  true,
        autoplay: true
    });
    sliderModules.init();

    const sliderFeed = new MiniSlider({
        container: '.feed__slider', 
        next: '.feed__slider .slick-next',
        prev: '.feed__slider .slick-prev',
        activeClass: 'feed__item-active'
    });
    sliderFeed.init();

    const videoPlayer = new VideoPlayer('.showup .play', '.overlay', '.close');
    videoPlayer.init();

    const modulesOld = new Modules('.officerold', '.officerold .officer__card-item');
    modulesOld.init();

    const modulesNew = new Modules('.officernew', '.officernew .officer__card-item');
    modulesNew.init();
});