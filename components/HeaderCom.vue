<template>
    <div id="co-header" class="co-header co-flex co-ac">
      <div class="headSlide co-flex co-ac">
        <div v-show = "isBack || isBacPortal">
            <i @click="back" class="coicon coicon-return co-fs-3 co-cl-0"></i>
        </div>
        <slot name="lef-btn"></slot>
      </div>
      <div class="co-cl-0  co-header-title co-tx-c">{{title}}</div>
      <div class="headSlide co-flex co-je">
        <slot name="rit-btn"></slot>
      </div>
    </div>
</template>

<script>
export default {
  name: 'HeaderCom',
  props: {
    title: {
      type: String,
      default: ''
    },
    isBack: {
      type: Boolean,
      default: false
    },
    isBacPortal: {
      type: Boolean,
      default: false
    },
    headerBg: {
      type: String,
      default: '#d81e06'
    }
  },
  data () {
    return {
    }
  },
  methods: {
    back () {
      if (this.isBacPortal) {
        if (window.corNative) {
          window.corNative.closeWeb()
        } else {
          window.history.go(-1)
        }
      } else {
        this.$emit('go-back')
        this.$router.goBack()
      }
    }
  }
}
</script>

<style lang = "less">
.co-header {
  background: rgb(72, 137, 219) !important;
  .headSlide{
    min-width:4rem
  }
}
</style>
