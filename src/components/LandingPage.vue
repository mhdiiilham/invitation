<template>
  <div id="cover">
    <div id="header">
      <!-- <span id="title">- The Wedding of -</span> -->
      <span id="date">... today, tomorrow, and forever</span>
    </div>
    <br />
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSecond() {
      this.$emit("openInvitationClicked");
    }
  }
};
</script>

<style scoped>
/* General Reset */
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

/* Header with Logo */
#header {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
  background-image: url('@/assets/Logo.png'); /* Set logo as background */
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 100vw;
  height: 40vh; /* Adjust height to fit the logo */
  position: relative;
}

/* Wedding Title */
#title {
  font-family: "Jura", serif;
  color: white;
  font-weight: 500;
  font-size: 2em;
  position: absolute;
  top: -10px; /* Move the title above the logo */
  margin: 0;
}

/* Date Under Title */
#date {
  font-family: "Jura", serif;
  color: white;
  font-size: 1.5em;
  position: absolute;
  bottom: -10px; /* Move the date below the logo */
  margin: 0;
}

/* Fullscreen Cover Section */
#cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-color: black;
}

/* Dark Overlay Effect */
#cover::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
}

/* Centering the Button */
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  #title {
    font-size: 1em;
    top: -10px;
  }

  #date {
    font-size: 1em;
    bottom: -10px;
  }
}
</style>
