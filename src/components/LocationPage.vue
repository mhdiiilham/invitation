<template>
  <div id="cover">
    <button @click="openGoogleMaps">Open Location</button>
  </div>
</template>
  
<script>
export default {
  name: 'LocationPage',
  methods: {
    openGoogleMaps() {
      window.open("https://maps.app.goo.gl/eTUpaVpe8uXp7r2M9", "_blank");
    }
  }
};
</script>
  
<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@500;700&display=swap');

#cover {
  height: 100vh;
  width: 100vw;
  background-color: grey;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Elegant Flat Button */
button {
  font-family: 'Playfair', serif;
  font-size: 1.5em;
  font-weight: 500;
  padding: 12px 36px;
  background: none;
  border: none;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  outline: none;
}

/* Flat Underline Effect */
button::after {
  content: "";
  display: block;
  width: 100%;
  height: 2px;
  background: white;
  position: absolute;
  bottom: 0;
  left: 0;
  transition: all 0.3s ease;
}

/* Hover Effect */
button:hover::after {
  height: 5px;
  background: rgba(255, 255, 255, 0.8);
}
</style>
