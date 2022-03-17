<template>
  <div id="app">
    <!-- <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </nav> -->
    <heady/>
    <router-view/>
    <foot/>
  </div>
</template>

<script>
import heady from '@/components/HeaderBar.vue'
import foot from '@/components/FooterBar.vue'

export default {
  components: {
    heady,
    foot,
  }
}
</script>

