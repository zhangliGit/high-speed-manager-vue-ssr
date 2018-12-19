<template>
  <section class="container">
    <div>
      <app-logo/>
      <div @click="goDetail(item.name)" v-for="(item, index) in users" :key="index" style="padding: 15px 20px; border-bottom: 1px #ccc solid">
          {{ item.name }}
      </div>
    </div>
  </section>
</template>

<script>
import AppLogo from '~/components/AppLogo.vue'

export default {
  components: {
    AppLogo
  },
  data () {
    return { project: 'default' }
  },
  methods: {
    goDetail (name) {
      console.log('js跳转')
      this.$router.push({
        'name': 'user-one',
        params: {
          id: name
        }
      })
    }
  },
  async asyncData({app}) {
    const { data } = await app.$axios.get('http://yapi.demo.qunar.com/mock/28776/riderList')
    return { users: data.data }
  }
}
</script>

<style>
</style>

