export default class Modules {
    constructor(containerSelector, elemsSelector) {
        this.container = document.querySelector(containerSelector);
        this.items = document.querySelectorAll(elemsSelector);
        this.btn = this.container.querySelector('.plus');
        this.childes = this.container.childNodes;
        this.firstChild = this.container.firstChild;
    }

    hideItems() {
        this.items.forEach(item => {
            if(item !== this.items[this.items.length - 1]) {
                item.style.display = 'none';
            }
        });
    }

    showItems(i) {
        this.items[i].classList.add('animated', 'fadeIn');
        this.items[i].style.display = 'flex';
    }

    bindBtns() {
        let i = 0;

        this.btn.addEventListener('click', () => {
            this.childes.forEach((child) => {
                if(!(child == this.firstChild || child == this.btn)) {
                    this.showItems(i);
                }
            });

            i++;
        }); 
    }

    init() {
        this.hideItems();
        this.bindBtns();
    }
}