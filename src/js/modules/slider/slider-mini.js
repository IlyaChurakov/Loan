import Slider from './slider';

export default class MiniSlider extends Slider {
    constructor(container, next, prev, activeClass, animate, autoplay) {
        super(container, next, prev, activeClass, animate, autoplay);
    }

    decorizeSlides() {
        this.slides.forEach(slide => {
            slide.classList.remove(this.activeClass);
            if(this.animate) {
                slide.querySelector('.card__title').style.opacity = '.4';
                slide.querySelector('.card__controls-arrow').style.opacity = '0';
            }
        });

        if(!this.slides[0].closest('button')) {
            this.slides[0].classList.add(this.activeClass);
        }

        if(this.animate) {
            this.slides[0].querySelector('.card__title').style.opacity = '1';
            this.slides[0].querySelector('.card__controls-arrow').style.opacity = '1';
        }
    }

    nextSlide() {
        this.slides.forEach(slide => {
            if(slide.tagName == 'BUTTON') {
                this.container.appendChild(slide);
            }
        });

        this.container.appendChild(this.slides[0]);
        this.decorizeSlides();
    }

    bindBtns() {
        this.next.addEventListener('click', () => this.nextSlide());

        this.prev.addEventListener('click', () => {
            for(let i = this.slides.length - 1; i > 0; i--) {
                if(this.slides[i].tagName !== "BUTTON") {
                    let active = this.slides[i];
                    this.container.insertBefore(active, this.slides[0]);
                    this.decorizeSlides();
                    break;
                }
            }
        });
    }

    init() {
        this.container.style.cssText = `
            display: flex;
            flex-wrap: wrap;
            overflow: hidden;
            align-items: flex-start;
        `;

        this.decorizeSlides();
        this.bindBtns();

        if(this.autoplay) {
            setInterval(() => this.nextSlide(), 5000);
        }
    }
}