<template>
  <v-app>

    <v-app-bar color="white" app dense flat short>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
      <v-toolbar-title>Search App</v-toolbar-title>
      <v-spacer></v-spacer>

      <v-form>
        <v-container class="mt-10">
          <v-row >
            <v-text-field outlined label="Search"></v-text-field>
          </v-row>
        </v-container>
      </v-form>

      <v-icon>mdi-magnify</v-icon>
      <v-btn icon> <v-icon>mdi-dots-vertical</v-icon> </v-btn>
    </v-app-bar>

    <v-content>
      <router-view></router-view>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  })
}
</script>
