<template>
  <section class="container">
    <div>
      <!-- <logo/> -->
      <h1 class="title">
        showKs portal
      </h1>
      <h2 class="subtitle">
        Just a sample portal app
      </h2>
    </div>
  </section>
</template>

<script>
// import Logo from '~/components/Logo.vue'
if (process.browser) {
  require('ie-buster')
}
import io from 'socket.io-client'
const socket = io('http://localhost:8080', {
  path: '/notification'
})

export default {
  //   components: {
  //     Logo
  //   }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
