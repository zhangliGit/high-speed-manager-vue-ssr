<template>
  <scroll-list ref="scroll">
    <div class="trip">
      <div class = "co-flex co-pd-tb08 mainBg co-cl-0">
        <div :key ="index" v-for = "(item, index) in list" class = "co-f1 co-flex co-ver co-ac co-jc">
          <div>
          <img :src = "item.icon" alt = "" style = "width: 34px; height: 34px, display: block" />
          </div>
          <div class = "co-fs-02 co-mg-t04">{{ item.title }}</div>      
        </div>
      </div>
      <div>
        <div v-for = "(item, index) in tripList"  :key = "index" class = "co-flex co-pd-a06 co-bg-0 co-bd-b co-of">
          <div style="width: 5rem; height: 4rem;">
            <img v-lazy="item.picUrl" style = "width: 5rem; height: 4rem; display:block"  alt = "" >
          </div>
          <div class = "co-f1 co-mg-l06 co-flex co-ver co-jsb">
            <div class = "co-te2" style = "color: #333; -webkit-box-origin: vertical; box-origin: vertical">{{ item.title }}</div>
            <div class = "co-flex co-te co-te co-ac co-cl-2 co-fs-01"  style = "-webkit-box-origin: vertical; box-origin: vertical">{{ item.levelTitle }}</div>
            <div class = "co-flex co-jsb co-ac co-fs-01">
              <div class="tip">{{ item.type }}</div>
              <div class = "co-flex co-ac" style = "color: #c3c3c3">
                <div><i class = "icon iconfont icon-yanjing co-fs-1"></i></div>
                <div style = "margin: 3px 3px 0">{{ item.watch }}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </scroll-list>
</template>

<script>
import ScrollList from './scrollList.vue'
import skb from '~/assets/images/skb.png'
import cxdc from '~/assets/images/cxdc.png'
import gtywb from '~/assets/images/gtywb.png'
import czdp from '~/assets/images/czdp.png'
import { mapState, mapActions } from 'vuex'
export default {
  name: 'Trip',
  components: {
		ScrollList
  },
  data () {
    return {
      tripList: [],
      list: [
        {
          title: '时刻表/正晚点',
          icon: skb
        },
        {
          title: '车厢点餐',
          icon: cxdc
        },
        {
          title: '高铁延误宝',
          icon: gtywb
        },
        {
          title: '车站大屏',
          icon: czdp
        }
      ]
    }
  },
  computed: {
  },
  methods: {
  },
  mounted() {
  },
  
}
</script>

<style scoped lang = "less">
  .trip {
    .mainBg {
      background: #4889db
    }
    .tip {
      padding: 0px 8px;
      height: 24px;
      line-height: 22px;
      border-radius: 3px;
      border: 1px #7ed321 solid;
      color: #7ed321;
      font-size: 12px;
      transform: scale(.9);
    }
  }
</style>
