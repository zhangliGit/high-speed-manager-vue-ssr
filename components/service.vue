<template>
  <scroll-list ref="scroll">
    <div class="service">
      <div class = "co-pd-a06 co-bd-b">出行服务</div>
      <div class = "co-flex co-pd-tb06">
        <div :key = "index" v-for = "(item, index) in serList" class = "co-f1 co-flex co-ver co-ac co-jc">
          <div>
            <img :src = "item.icon" style = "width: 34px; height: 34px; display: block"  alt = "" />
          </div>
          <div class = "co-cl-1 co-fs-01 co-mg-t04">{{ item.title }}</div>
          <div class = "co-fs-02 co-cl-2 co-mg-t02" style = "transform: scale(.9)">{{ item.tip }}</div>
        </div>
      </div>
      <div class = "co-bg-0 co-mg-t06">
        <div class = "co-pd-a06 co-bd-b">管家自营</div>
        <div class = "co-pd-tb08 co-of">
          <div :key = "index" v-for = "(item, index) in manList" class = "co-flex co-ver co-ac co-jc tab-list">
            <div>
            <img :src = "item.icon" style = "width: 32px; height: 32px; display: block"  alt = "" />
            </div>
            <div class = "co-mg-t04 co-fs-01 co-cl-1">{{item.title}}</div>
          </div>
        </div>
      </div>
    </div>
  </scroll-list>
</template>

<script>
import ScrollList from './scrollList.vue'
import jdydIcon from '~/assets/images/jdydIcon.png'
import hbdtIcon from '~/assets/images/hbdtIcon.png'
import qyfwIcon from '~/assets/images/qyfwIcon.png'
import cxzbIcon from '~/assets/images/cxzbIcon.png'
import jfdhIcon from '~/assets/images/jfdhIcon.png'
import hcdcIcon from '~/assets/images/hcdcIcon.png'
import cjyIcon from '~/assets/images/cjyIcon.png'
import flzxIcon from '~/assets/images/flzxIcon.png'
import xykIcon from '~/assets/images/xykIcon.png'
export default {
  name: 'Service',
  components: {
		ScrollList
  },
  data () {
    return {
      title: '旅行服务',
      serList: [
        {
          title: '酒店预订',
          tip: '收单送50',
          icon: jdydIcon
        },
        {
          title: '航班动态',
          tip: '延误提醒',
          icon: hbdtIcon
        },
        {
          title: '企业服务',
          tip: '高效便捷',
          icon: qyfwIcon
        }
      ],
      manList: [
        {
          title: '出行装备',
          icon: cxzbIcon
        },
        {
          title: '积分兑换',
          icon: jfdhIcon
        },
        {
          title: '火车订餐',
          icon: hcdcIcon
        },
        {
          title: '出境游',
          icon: cjyIcon
        },
        {
          title: '福利中心',
          icon: flzxIcon
        },
        {
          title: '信用卡',
          icon: xykIcon
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    goDetail () {
      this.$router.push({name: 'detail'})
    }
  },
  
}
</script>

<style scoped lang = "less">
  .service {
    .tab-list {
      float: left;
      width: 33.33%;
      padding: .5rem 0
    }
  }
</style>
