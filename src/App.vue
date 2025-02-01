<template>
  <div id="app">
    <div id="first-section">
      <first-page @openInvitationClicked="handleScrollDownToNextSection"></first-page>
    </div>
    <div id="closed" v-show="opened">
      <div id="second-section">
        <second-page></second-page>
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
            <a class="text-body" href="https://muhammadilham.xyz/">Ilham</a>
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
import FirstPage from './components/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';
import ReserveationPage from './components/ReservationPage.vue';
import LocationPage from './components/LocationPage.vue';

export default {
  name: 'App',
  data() {
    return {
      opened: false
    }
  },
  components: {
    FirstPage,
    SecondPage,
    LocationPage,
    ReserveationPage,
  },
  methods: {
    // handleScrollDownToNextSection: function() {
    //   this.opened = true;
    //   document.getElementById("second-section").scrollIntoView({ behavior: "smooth", });
    // },
    handleScrollDownToNextSection() {
      this.opened = true;

      // Wait for the DOM to update before scrolling
      this.$nextTick(() => {
        const section = document.getElementById("second-section");
        if (section) {
          section.scrollIntoView({ behavior: "smooth" });
        }
      });
    },
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
