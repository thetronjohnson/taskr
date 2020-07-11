<template>
  <div id="app">
    <Navbar/>
    <div class="list">
    <List/>
    </div>
  </div>
</template>

<script>

import Navbar from './components/Navbar.vue'
import List from './components/List.vue'

export default {
  name: 'App',
  components: {
    Navbar,
    List
  }
}
</script>

<style scoped>
.list{
  text-align: center;
}
</style>


