<template>
  <div id="cover">
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.5850329496025!2d110.42350077491811!3d-7.620049092395363!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a5dfd81bbd009%3A0x2f15d94e960d9a38!2sKalyana%20Resort!5e0!3m2!1sen!2sid!4v1738406002401!5m2!1sen!2sid"
      width="600"
      height="450"
      style="border:0;"
      allowfullscreen=""
      loading="lazy"
      referrerpolicy="no-referrer-when-downgrade"
    ></iframe>
  </div>
</template>
  
<script>
export default {
  name: 'LocationPage'
}
</script>
  
<style scoped>
#cover {
  height: 100vh;
  width: 100vw;
  background-color: grey; /* Set background to black */
  display: flex;
  align-items: center;
  justify-content: center;
}

iframe {
  border: 2px solid white; /* Optional: Add white border to make it pop */
  border-radius: 10px; /* Optional: Rounded corners */
}
</style>