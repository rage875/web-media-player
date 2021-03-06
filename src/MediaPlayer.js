class MediaPlayer {
    constructor(config)
    {
        this.media = config.element;
        this.plugins = config.plugins || [];
        this._initPlugins();
    }

    _initPlugins() {
        this.plugins.forEach(plugin => {
            plugin.run(this);
        });
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

    mute() {
        this.media.muted = true;
    }

    unmute() {
        this.media.muted = false;
    }

    toggleMute() {
        if (this.media.muted) {
            this.unmute();
        } else {
            this.mute();
        }
    }
};

export default MediaPlayer;