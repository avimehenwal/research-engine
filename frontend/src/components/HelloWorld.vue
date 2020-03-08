<template>
  <div class="container">
    <a v-for="(item) in urls" :key="item" :href="item" target="frame">
      <button type="button">
        {{item}}
      </button>
    </a>

    <iframe src="" height="80%" width="100%" name="frame" scrolling="yes"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    searchTerm: '',
    urls: [
      'https://www.wikipedia.org/',
      'https://www.wolframalpha.com/'
      // 'https://www.w3schools.com',
      // 'https://stackexchange.com/',
      // 'https://github.com/search/',
      // 'https://www.reddit.com/',
    ]
  })
}
</script>

<style>
.container {
  height: 100vh;
  width: 100vw;
  /* background: yellow; */
}
</style>