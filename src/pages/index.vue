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
      <div>
        <el-row>
          <el-col
            v-for="(o, index) in 6"
            :span="4"
            :key="o"
            :offset="index > 0 ? 3 : 0">
            <el-card :body-style="{ padding: '0px' }">
              <img
                src="/img/container.png"
                class="image">
              <div style="padding: 14px;">
                <span>Yummy container</span>
                <div class="bottom clearfix">
                  <time class="time">{{ currentDate }}</time>
                </div>
              </div>
            </el-card>
          </el-col>
        </el-row>
      </div>
    </div>
  </section>
</template>

<style>
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
<script>
// import Logo from '~/components/Logo.vue'
import io from 'socket.io-client'
const socket = io('http://localhost:8080', {
  path: '/notification'
})

export default {
  data() {
    return {
      currentDate: new Date()
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
</style>
