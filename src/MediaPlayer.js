class MediaPlayer {
    constructor(config)
    {
        this.media = config.element;
        this.plugins = config.plugins || [];
    }

    play() {
        this.media.play();
    }

    pause() {
        this.media.pause();
    }

    togglePlay() {
        if (this.media.paused) {
            this.play();
          } else {
            this.pause();
          }
    }
};

export default MediaPlayer;