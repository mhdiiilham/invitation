<template>
  <div id="app">
    <div id="first-section">
      <landing-page></landing-page>
    </div>
    <div id="closed">
      <div id="second-section">
        <details-page></details-page>
      </div>
      <div id="reservation">
        <reserveation-page></reserveation-page>
      </div>
      <div id="location-page">
        <location-page></location-page>
      </div>
      <div>
        <footer class="bg-body-tertiary text-center text-lg-start">
          <!-- Copyright -->
          <div class="text-center p-3" style="background-color: black">
            © 2025 Made with <span>&#10084;</span> by her soon to be husband
            <a class="text-body" target="_blank" href="https://muhammadilham.xyz/">Ilham</a>
            <br />
            <a class="text-body" target="_blank" href="https://icons8.com/icon/40138/wedding">Wedding</a> icon by <a class="text-body" target="_blank" href="https://icons8.com">Icons8</a>
          </div>
          <!-- Copyright -->
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
import LandingPage from './components/LandingPage.vue';
import DetailsPage from './components/DetailsPage.vue';
import ReserveationPage from './components/ReservationPage.vue';
import LocationPage from './components/LocationPage.vue';
import AudioFile from './assets/BackgroundSong.mp3';

export default {
  name: 'App',
  data() {
    return {
      audio: null,
      hasInteracted: false,
    }
  },
  components: {
    LandingPage,
    DetailsPage,
    LocationPage,
    ReserveationPage,
  },
  methods: {
    playAudio() {
      if (!this.audio) {
        this.audio = new Audio(AudioFile);
        this.audio.loop = true;
      }

      this.audio.play().then(() => {
        console.log("Audio is playing");
      }).catch(err => {
        console.warn("Audio blocked:", err);
      });
    },

    pauseAudio() {
      if (this.audio && !this.audio.paused) {
        this.audio.pause();
        console.log("Audio paused");
      }
    },

    handleUserInteraction() {
      if (!this.hasInteracted) {
        this.playAudio();
        this.hasInteracted = true;
        this.removeEventListeners();
      }
    },

    removeEventListeners() {
      window.removeEventListener('scroll', this.handleUserInteraction);
      window.removeEventListener('click', this.handleUserInteraction);
      window.removeEventListener('touchstart', this.handleUserInteraction);
    },

    handleVisibilityChange() {
      if (document.hidden) {
        this.pauseAudio();
      } else {
        this.playAudio();
      }
    },
  },
  mounted() {
    window.addEventListener('scroll', this.handleUserInteraction);
    window.addEventListener('click', this.handleUserInteraction);
    window.addEventListener('touchstart', this.handleUserInteraction);

    // Listen for tab switching
    document.addEventListener('visibilitychange', this.handleVisibilityChange);
  },
  beforeDestroy() {
    this.removeEventListeners();
  }
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
