
<template>
  <div class="container">
    <h1>showKs portal site</h1>
    <h2>List of alive instances</h2>
    <ul>
      <li
        v-for="instance in instances"
        :key="instance.id">
        {{ instance.id }}
      </li>
    </ul>
  </div>
</template>

<script>
import fetch from 'isomorphic-fetch'
export default {
  async asyncData() {
    const response = await fetch(
      'http://aggregator.stg.showks.containerdays.jp/instances'
    )
    const instances = await response.json()
    return { instances }
  }
}
</script>

<style>
</style>
