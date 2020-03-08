<template>
  <div class="container">
    <label>Search</label><input type="text" v-model="searchTerm">
    <a v-for="(item, index) in urls" :key="item" :href="computedUrl" target="frame">
      <button type="button" v-on:click="searchURL(index)">
        {{item}}
      </button>
    </a>
    <a target="_blank" :href="computedUrl">{{computedUrl}}</a>

    <iframe src="" height="80%" width="100%" name="frame" scrolling="yes"></iframe>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data: () => ({
    searchTerm: '',
    computedUrl: '',
    urls: [
      'https://en.wikipedia.org/wiki/',
      'https://www.wolframalpha.com/input/?i='
      // 'https://www.w3schools.com',
      // 'https://stackexchange.com/',
      // 'https://github.com/search/',
      // 'https://www.reddit.com/',
    ]
  }),
  methods: {
    searchURL: function (value) {
      console.log("method searchURL")
      // console.log(event)
      console.log(value)
      var newurl = this.urls[value] + this.searchTerm
      console.log(newurl)
      this.computedUrl = newurl
    }
  }
}
</script>

<style>
.container {
  position: absolute; /*position: fixed;*/
  height: 100vh;
  width: 100vw;
  /* background: yellow; */
}
</style>