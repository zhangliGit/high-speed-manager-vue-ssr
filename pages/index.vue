<template>
  <div class="co-Page co-flex co-ver">
    <header-com :title="titleList[current]"></header-com>
    <div class="co-f1 co-flex">
      <keep-alive>
        <component :is = "currentIndex"></component>
      </keep-alive>
    </div>
    <div id="co-footer" class="co-bg-0 co-bd-t co-flex co-ac co-fs-01 co-cl-1" style = "color: rgb(131, 131, 131)">
      <div @click="changeMenu(index)" v-for="(item, index) in footer" :key="index" :class="['co-f1 co-flex co-ver co-ac co-jc',{'current-active menu-scale': current == index}]">
        <i :class="`icon iconfont ${item.icon} co-fs-3`"></i>
        <div class="co-fs-01">{{item.title}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import HeaderCom from '~/components/HeaderCom.vue'
import Trip from '~/components/trip.vue'
import Service from '~/components/service.vue'
import Person from '~/components/person.vue'
import Ticket from '~/components/ticket.vue'
export default {
  components: {
    HeaderCom
  },
  data () {
    return {
      titleList: ['车牌预定', '我的行程', '旅行服务', '个人中心'],
      comList: [Ticket, Trip, Service, Person],
      currentIndex: Ticket,
      current: 0,
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
  methods: {
    changeMenu (index) {
      this.current = index
      this.currentIndex = this.comList[index]
    }
  },
}
</script>

<style>
</style>

