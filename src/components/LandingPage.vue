<template>
  <div id="cover">
    <div id="header">
      <span id="title">The Wedding of</span>
      <img id="logo" src="@/assets/Logo.png" alt="Wedding Logo" />
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
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1;
}

#title {
  font-family: "DM Serif Text", serif;
  color: white;
  font-weight: 500;
  font-size: 2em;
  margin: 0; /* No margin, elements will be super close */
}

#logo {
  width: 40vw; /* Reduced further */
  max-width: 200px; /* Even smaller logo */
  height: auto;
  margin: 0; /* No margin, elements will be super close */
}

#date {
  font-family: "DM Serif Text", serif;
  color: white;
  font-size: 1.5em;
  margin: 0; /* No margin, elements will be super close */
}

#cover {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/FirstPage.jpg');
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

/* Button positioned at the bottom */
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
  bottom: 40px; /* Adjust this to move the button closer/further */
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
  #logo {
    max-width: 80vw;
    max-height: 160px;
  }

  #title {
    font-size: 1.5em;
  }

  #date {
    font-size: 1.2em;
  }

  .scroll-btn {
    width: 140px;
    height: 50px;
    padding: 12px;
    bottom: 30px; /* Moves the button slightly up on smaller screens */
  }

  .button-text {
    font-size: 14px;
  }
}
</style>
