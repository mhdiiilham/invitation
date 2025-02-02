<template>
  <div id="cover">
    <img id="logo" src="@/assets/Logo.png" alt="Wedding Logo">
    <div id="header">
      <span id="date">... today, tomorrow, and forever</span>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
html, body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow-x: hidden;
}

#logo {
  width: 300px;
  height: auto;
  max-width: 60%;
  margin-top: 20px;
  margin-bottom: 25px;
}

#date {
  font-family: "Jura", serif;
  color: white;
  font-size: 1.5em;
  text-align: center;
}

#cover {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  height: 100vh;
  width: 100vw;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  position: relative;
  background-color: black;
  padding-top: 20vh;
}

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

@media (max-width: 768px) {
  #logo {
    max-width: 70%;
    margin-top: 10px;
    margin-bottom: 20px;
  }

  #date {
    font-size: 1.2em;
  }
}
</style>
