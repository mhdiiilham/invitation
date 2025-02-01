<template>
  <div id="cover">
    <div id="header">
      <span id="title">- The Wedding of -</span>
      <span id="date">Saturday, 2 August 2025</span>
    </div>
    <br />
    <div class="container">
      <button class="scroll-btn" @click="scrollToSecond">
        <span class="button-text">Open Invitation</span>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSecond() {
      this.$emit('openInvitationClicked');
    }
  }
};
</script>

<style scoped>
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
  position: relative; /* To position text outside of the logo */
}

#title {
  font-family: "Jura", serif;
  color: white;
  font-weight: 500;
  font-size: 2em;
  position: absolute;
  top: -10px; /* Move the title above the logo */
  margin: 0;
}

#date {
  font-family: "Jura", serif;
  color: white;
  font-size: 1.5em;
  position: absolute;
  bottom: -10px; /* Move the date below the logo */
  margin: 0;
}

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
}

#cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7);
  z-index: 0;
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

.scroll-btn {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 15px;
  width: 160px;
  height: 60px;
  background: rgba(255, 255, 255, 0.1); /* Semi-transparent */
  color: white;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  position: absolute;
  bottom: 40px;
}

/* Smooth Hover Effect */
.scroll-btn:hover {
  background: rgba(255, 255, 255, 0.15);
  box-shadow: 0 0 8px rgba(255, 255, 255, 0.3); /* Soft glowing effect */
  transform: scale(1.03);
}

/* Button Text */
.button-text {
  font-size: 16px;
  font-family: "Montserrat", serif;
  text-align: center;
}

/* Responsive Adjustments */
@media (max-width: 768px) {
  #title {
    font-size: 1em;
    top: -10px; /* Keep the title position above the logo */
  }

  #date {
    font-size: 1em;
    bottom: -10px; /* Keep the date position below the logo */
  }

  .scroll-btn {
    width: 140px;
    height: 50px;
    padding: 12px;
    bottom: 30px;
  }

  .button-text {
    font-size: 14px;
  }
}
</style>
