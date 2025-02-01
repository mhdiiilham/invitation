<template>
  <div id="cover">
    <div id="header">
      <span id="title">The Wedding of</span>
      <span id="name">Ilham & Oca</span>
      <span id="date">Saturday, 2 August 2025</span>
    </div>
    <br />
    <div class="container">
      <button class="scroll-btn" @click="scrollToSecond"><span class="material-symbols-outlined">drafts</span>Open Invitation</button>
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
#header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 1; /* Ensure the text is above the overlay */
}

#title {
  font-family: "DM Serif Text", serif;
  color: white;
  font-weight: 500;
  font-size: 2em;
  margin-bottom: 5px; /* Reduce spacing */
}

#name {
  font-family: "Tangerine", serif;
  color: white;
  font-weight: 500;
  font-size: 5em;
  margin-bottom: 5px; /* Reduce spacing */
}

#date {
  font-family: "DM Serif Text", serif;
  color: white;
  font-size: 1.5em;
  margin-bottom: 20px; /* Reduce spacing but keep some separation */
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
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Space between icon and text */
  padding: 15px 30px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.3s;
}

/* .scroll-btn {
  padding: 15px 30px;
  font-size: 18px;
  background: rgba(255, 255, 255, 0.2);
  border: 2px solid white;
  color: white;
  cursor: pointer;
  border-radius: 10px;
  transition: background 0.3s;
} */

.scroll-btn:hover {
  background: rgba(255, 255, 255, 0.4);
}
</style>