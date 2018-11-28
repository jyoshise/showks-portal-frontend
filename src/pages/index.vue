
<template>
  <section class="container">
    <div>
      <h1 class="title">showKs portal site</h1>
      <h2 class="subtitle">List of alive instances</h2>
      <el-row>
        <el-col
          v-for="instance in instances"
          :span="4"
          :key="instance.id">
          <el-card :body-style="{ padding: '0px' }">
            <a :href="instance.linkUrl">
              <img
                :src="'http://aggregator.stg.showks.containerdays.jp' + instance.thumbnailUrl"
                class="image"
              >
            </a>
            <div style="padding: 14px;">
              <span>{{ instance.author.userName }}</span>
              <span>
                <a
                  :href="'https://twitter.com/' + instance.author.twitterId"
                  target="_blank">
                  <font-awesome-icon
                    :icon="['fab', 'twitter']"
                    class="icon alt"/>
                </a>
              </span>
              <p>{{ instance.author.comment }}</p>
              <div class="bottom clearfix">
                <time class="time">{{ dateFormat(instance.createdAt ) }}</time>
              </div>
            </div>
          </el-card>
        </el-col>
      </el-row>
    </div>
  </section>
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
  },
  methods: {
    dateFormat(createdAt) {
      const date = new Date(createdAt)
      const y = date.getFullYear()
      const m = date.getMonth() + 1
      const d = date.getDate()
      const h = date.getHours() < 10 ? '0' + date.getHours() : date.getHours()
      const i =
        date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes()
      const s =
        date.getSeconds() < 10 ? '0' + date.getSeconds() : date.getSeconds()

      if (m < 10) {
        m = '0' + m
      }
      if (d < 10) {
        d = '0' + d
      }

      // フォーマット整形済みの文字列を戻り値にする
      return y + '/' + m + '/' + d + ' ' + h + ':' + i + ':' + s
    }
  }
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
.time {
  font-size: 13px;
  color: #999;
}
.bottom {
  margin-top: 13px;
  line-height: 12px;
}
.image {
  width: 100%;
  display: block;
}
.clearfix:before,
.clearfix:after {
  display: table;
  content: '';
}
.clearfix:after {
  clear: both;
}
</style>
