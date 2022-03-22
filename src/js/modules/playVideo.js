export default class VideoPlayer {
    constructor(btns, overlay, closeOverlay) {
        this.btns = document.querySelectorAll(btns);
        this.overlay = document.querySelector(overlay);
        this.btnCloseOverlay = this.overlay.querySelector(closeOverlay);
    }

    createPlayer(url) {
        this.player = new YT.Player('frame', {
            height: '100%',
            width: '100%',
            videoId: `${url}`
        });

        this.overlay.style.display = 'flex';
    }

    bindBtns() {
        this.btns.forEach(btn => {
            btn.addEventListener('click', () => {
                if(document.querySelector('iframe#frame')) {
                    this.overlay.style.display = 'flex';
                } else {
                    const path = btn.getAttribute('data-url');
                    this.createPlayer(path);
                }
            });
        });
    }

    bindCloseBtn() {
        this.overlay.addEventListener('click', (e) => {
            if(e.target && (e.target == this.overlay || e.target == this.btnCloseOverlay)) {
                this.overlay.style.display = 'none';
                this.player.pauseVideo();
            }
        });
    }

    init() {
        const tag = document.createElement('script');

        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

        this.bindBtns();
        this.bindCloseBtn();
    }
}