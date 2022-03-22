import Slider from './slider';

export default class MainSlider extends Slider {
    constructor(btns) {
        super(btns);
    }

    showSlides(n) {
        if(n > this.slides.length) {
            this.slideIndex = 1;
        } else if(n < 1) {
            this.slideIndex = this.slides.length;
        }

        try {
            this.hanson.style.display = 'none';
            this.hanson.classList.add('animated');

            if(n == 3) {
                setTimeout(() => {
                    this.hanson.classList.add('fadeInUp');
                    this.hanson.style.display = 'block';
                }, 3000);
            } else {
                this.hanson.classList.remove('fadeInUp');
            }
        } catch(err) {}

        this.slides.forEach(slide => {
            slide.style.display = 'none';
        });

        this.slides[this.slideIndex - 1].style.display = 'block';
    }

    plusSlides(n) {
        this.showSlides(this.slideIndex += n);
    }

    render() {
        try {
            this.hanson = this.container.querySelector('.hanson');
        } catch(err) {}
        
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                this.plusSlides(1);
            });

            btn.parentNode.previousElementSibling.addEventListener('click', (e) => {
                e.preventDefault();
                this.slideIndex = 1;
                this.showSlides(this.slideIndex);
                
                if(document.querySelector('.overlay').style.display == 'block') {
                    document.querySelector('.overlay').style.display = 'none';
                }
            });
        });

        this.showSlides(this.slideIndex);
    }
}