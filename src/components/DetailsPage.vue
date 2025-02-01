<template>
    <div id="cover">
    </div>
</template>
  
<script>
export default {

}
</script>
  
<style scoped>
#cover {
  height: 100vh;
  width: 100vw;
  background-image: url('../assets/SecondPage.jpg');
  background-size: cover;   /* Ensures the image covers the entire screen */
  background-position: center;  /* Centers the image */
  background-repeat: no-repeat; /* Prevents repeating */
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
</style>