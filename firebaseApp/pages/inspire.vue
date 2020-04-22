<template>
  <v-containe>
    <v-row>
      <v-text-field
        v-model="searchTerm"
        label="ReSearch term"
        outlined
        clearable
        dense
      ></v-text-field>
      <v-btn
        dense
        v-for="(item, index) in urls"
        :key="item"
        :href="computedUrl"
        target="frame"
        v-on:click="searchURL(index)"
      >
        {{item}}
      </v-btn>
    </v-row>
    <a target="_blank" :href="computedUrl">{{computedUrl}}</a>

    <iframe src="" height="100%" width="100%" name="frame" scrolling="yes"></iframe>
  </v-containe>
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
    searchURL (value) {
      console.log('method searchURL')
      // console.log(event)
      console.log(value)
      const newurl = this.urls[value] + this.searchTerm
      console.log(newurl)
      this.computedUrl = newurl
    }
  }
}
</script>
