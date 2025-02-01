<template>
  <div id="cover">
    <div id="header">
      <h1 id="title">The Wedding of</h1>
      <h2 id="name">Ilham & Oca</h2>
    </div>
    <br />
    <div class="container">
      <button class="scroll-btn" @click="scrollToSecond">Open Invitation</button>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    scrollToSecond() {
      this.$emit('openInvitationClicked')
    }
  }
}
</script>

<style scoped>
#title {
  font-family: "DM Serif Text", serif;
  color: white;
  font-weight: 500;
  font-size: 2em;
}

#name {
  font-family: "Tangerine", serif;
  color: white;
  font-weight: 500;
  font-size: 5em;
}

#header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Ensure the text is above the overlay */
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
}

#cover::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.7); /* Dark overlay */
  z-index: 0; /* Place it below the content */
}

.text {
  margin-bottom: 20px;
  z-index: 1; /* Ensures the text is above the overlay */
  color: white; /* Optional: Make the text color white */
}

.container {
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Ensure the button is above the overlay */
}

.scroll-btn {
  padding: 15px 30px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.3s;
}

.scroll-btn:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>