<template>
  <scroll-list ref="scroll">
    <div class="ticket">
      <div class="co-pd-tb06 co-flex">
        <div class="co-f1 co-flex co-ver co-jc co-ac" v-for = "(item, index) in tabList" :key = "index">
          <img :src="item.img" class="imgIcon" alt="" />
          <div class="co-fs-01 col333 co-mg-t02">{{ item.name }}</div>
        </div>
      </div>
      <div class = "co-mg-a04 co-pd-a08 co-bg-0" style = "borderRadius:3px; WebkitBorderRadius: 3px">
        <div class = "co-flex co-jsb co-bd-b co-ac co-pd-b08">
          <div class = "co-cl-1 co-fs-3">
            广州
          </div>
          <div class = "co-cl-1 co-fs-1">
            <img :src = "change" alt = ""  style= "width: 24px; height: 24px;display: block" />
          </div>
          <div class = "co-cl-1 co-fs-3">
            武汉
          </div>
        </div>
        <div class = "co-flex co-jsb co-pd-tb1">
          <div class = "co-flex co-ac">
            <span class = "co-cl-2 co-fs-1">11月13日</span>
            <span class = "co-cl-2 co-pd-l05">星期五</span>
          </div>
          <div>学生</div>
        </div>
        <div @click = "searchList" class = "co-pd-a06 co-br-a0 co-f1 co-tx-c co-cl-0" style = "background: #4889db">搜索</div>
      </div>
      <div class = "co-mg-t04 co-bg-0 co-pd-tb02 co-flex co-cl-1 co-jc co-pd-r04">
        <div v-for = "(item, index) in menuList" :key = "index" class = "co-f1 co-flex co-ver co-ac co-jc co-mg-l04 co-pd-tb04" style = "background: #f8fbff">
          <div class = "co-flex co-jc">
            <img :src = "item.icon" alt = "" class="imgIcon" />
          </div>
          <div class = "co-fs-01 co-mg-t04 co-tx-c">{{ item.title }}</div>
        </div>
      </div>
    </div>
  </scroll-list>
</template>

<script>
import ScrollList from './scrollList.vue'
import hljx from '~/assets/images/hljx.png'
import hlzc from '~/assets/images/hlzc.png'
import jp from '~/assets/images/jp.png'
import jd from '~/assets/images/jd.png'
import qcp from '~/assets/images/qcp.png'
import change from '~/assets/images/change.png'
import zwd from '~/assets/images/zwd.png'
import hlpc from '~/assets/images/hlpc.png'
import xycx from '~/assets/images/xycx.png'
import dc from '~/assets/images/dc.png'
export default {
  name: 'Ticket',
  components: {
		ScrollList
  },
  data () {
    return {
      change,
      title: '首页',
      current: 0,
      tabList: [
        {
          img: hljx,
          name: '伙力精选'
        },
        {
          img: hlzc,
          name: '伙力专车'
        },
        {
          img: jp,
          name: '机票'
        },
        {
          img: jd,
          name: '酒店'
        },
        {
          img: qcp,
          name: '汽车票'
        },
      ],
      menuList: [
        {
          title: '正晚点',
          icon: zwd
        },
        {
          title: '火力拼车',
          icon: hlpc
        },
        {
          title: '信用出行',
          icon: xycx
        },
        {
          title: '订餐',
          icon: dc
        }
      ],
      footer: [
        {
          icon: "icon-huoche",
          title: '车票预定'
        },
        {
          icon: "icon-lishihangcheng",
          title: '我的行程'
        },
        {
          icon: "icon-lvxingxiang",
          title: '旅行服务'
        },
        {
          icon: "icon-geren",
          title: '个人中心'
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    goDetail () {
      this.$router.push({name: 'detail'});
    },
    searchList () {
      this.$router.push('/ticketList');
    }
  },
  
}
</script>

<style scoped lang = "less">
  .ticket {
    .imgIcon {
      width: 30px;
      height: 30px;
      display: block;
    }
    .hImg {
      width: 100%;
      height: auto;
      display: block
    }
  }
</style>
