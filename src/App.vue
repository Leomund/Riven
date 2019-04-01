<template>
  <v-app dark>
    <v-toolbar app fixed>
      <v-toolbar-title class="headline text-uppercase">
        <span>Riven</span>
        <span class="font-weight-light"> Price</span>
      </v-toolbar-title>
    </v-toolbar>

    <v-content>
      <router-view/>
    </v-content>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data () {
    return {
    }
  }
}
</script>
