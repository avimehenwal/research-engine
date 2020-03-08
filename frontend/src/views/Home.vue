<template>
  <v-container height="100%">
    <v-app-bar color="white" app dense flat short>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Search App</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-form>
        <v-container class="mt-10">
          <v-row >
            <v-text-field clearable dense outlined label="Search"
              prepend-icon="mdi-magnify"
              v-model="searchTerm"></v-text-field>
          </v-row>
        </v-container>
      </v-form>

      <v-btn icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>
    </v-app-bar>

    {{ searchTerm }}

    <!-- <v-card fluid wifth="100%" height="500px" href="url">
      <v-card-title> {{url}} </v-card-title>
      <v-card-text>
        <iframe width="100%" height="100%" src="https://www.w3schools.com"></iframe>
      </v-card-text>
    </v-card> -->

    <iframe src="" height="80%" width="100%" name="frame"
    scrolling="yes"></iframe>

    <a href="https://www.wikipedia.org/" target="frame">
    <v-btn>Wikipedia</v-btn></a>
    <!-- <v-dialog v-model="dialog" width="100%">
      <v-btn color="primary" dark slot="activator">Open Dialog</v-btn>
      <v-card>
        <iframe style="width:100%" src="https://vuetifyjs.com"></iframe>
      </v-card>
    </v-dialog> -->
  </v-container>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  data: () => ({
    searchTerm: '',
    url: 'https://www.w3schools.com'
  })
}
</script>
