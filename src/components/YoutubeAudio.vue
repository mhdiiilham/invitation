<template>
    <div>
      <iframe
        id="hidden-player"
        width="0"
        height="0"
        src="https://www.youtube.com/embed/rzRqEWJYwX4?autoplay=1&loop=1&playlist=rzRqEWJYwX4&controls=0&showinfo=0&mute=0"
        frameborder="0"
        allow="autoplay"
      ></iframe>
    </div>
</template>

<style scoped>
  #hidden-player {
    position: absolute;
    width: 0;
    height: 0;
    visibility: hidden;
  }
</style>