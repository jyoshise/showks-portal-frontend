<template>
  <div>
    <!-- 検索結果が0件だった場合 -->
    <div v-if="lists.length === 0 && !hasData">
      <i class="el-icon-warning">&nbsp;No results found for your keyword.</i>
    </div>
    <!-- 投稿一覧 -->
    <div v-else>
      <el-col
        v-for="(element, index) in lists"
        :span="6"
        :key="index"
        class="col-style">
        <el-card
          :body-style="{ padding: '15px' }"
          class="box-card">
          <div
            slot="header"
            class="clearfix">
            <a
              :href="element.url"
              target="_blank">{{ element.title }}</a>
          </div>
          <div class="bottom clearfix content-style text">
            <div>{{ element.created_at }}</div>
            <span>
              <img
                :src="element.user.profile_image_url"
                width="15"
                height="15" >
              <template v-if="element.user.description">
                <el-popover
                  slot="description"
                  :content="element.user.description"
                  placement="top-start"
                  width="300"
                  trigger="hover">
                  <span slot="reference">&nbsp;{{ element.user.id }}</span>
                </el-popover>
              </template>
              <template v-else>
                <span>&nbsp;{{ element.user.id }}</span>
              </template>
            </span>
            &nbsp;
            <span>
              <i class="el-icon-star-off">{{ element.likes_count }}</i>
            </span>
            <div>{{ getDescription(element.body) }}</div>
            <el-tag
              v-for="(tag, index) in element.tags"
              :key="index"
              size="mini"
              type="info"
              class="tab-style">{{ tag.name }}</el-tag>
          </div>
        </el-card>
      </el-col>
    </div>
  </div>
</template>

<script>
export default {
  // index.vueからデータを受け取る
  props: {
    lists: {
      type: Object,
      default: function() {
        return { message: 'hello' }
      }
    },
    hasData: {
      type: Boolean,
      default: false
    }
  }
  // data () {
  //   return {
  //     scrollY: 0
  //   }
  // }
}
</script>

<style>
</style>
