
<template>
  <ul>
    <li
      v-for="instance in instances"
      :key="instance.id">
      {{ instance.id }}
    </li>
  </ul>
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
