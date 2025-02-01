<template>
  <div id="app">
    <div id="first-section">
      <first-page @openInvitationClicked="handleScrollDownToNextSection"></first-page>
    </div>
    <div id="second-section">
      <second-page></second-page>
    </div>
    <second-page></second-page>
    <second-page></second-page>
    <div>
      <footer class="bg-body-tertiary text-center text-lg-start">
        <!-- Copyright -->
        <div class="text-center p-3" style="background-color: black">
          © 2025 Made with <span>&#10084;</span> by her soon to be husband
          <a class="text-body" href="https://muhammadilham.xyz/">Ilham</a>
        </div>
        <!-- Copyright -->
      </footer>
    </div>
  </div>
</template>

<script>
import FirstPage from './components/FirstPage.vue';
import SecondPage from './components/SecondPage.vue';

export default {
  name: 'App',
  components: {
    FirstPage,
    SecondPage
  },
  methods: {
    handleScrollDownToNextSection: function() {
      document.getElementById("second-section").scrollIntoView({ behavior: "smooth",  });
    }
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
