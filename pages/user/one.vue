<template>
  <section class="container">
    <div>
      我接受的参数为：{{$route.params.id}}
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
    return {

    }
  },
  mounted() {
    console.log(this.$route.params.id)
  },
}
</script>

<style>
body {
  font-size: 12px
}
</style>

