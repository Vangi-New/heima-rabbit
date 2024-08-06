<script setup lang="ts">
import CustomNavbar from './components/CustomNavbar.vue'
import { getHomeBannerAPI, getHomeCategoryAPI, getHomeHotAPI } from '@/services/home'
import type { BannerItem, CategoryItem, HotItem } from '@/types/home'
import { onLoad } from '@dcloudio/uni-app'
import { ref } from 'vue'
import CategoryGrid from './components/CategoryGrid.vue'
import HotPannel from './components/HotPannel.vue'

// banner图
const list = ref()
const getHomeBannerData = async () => {
  await getHomeBannerAPI().then((res) => {
    let tempList: BannerItem[] = res.result
    list.value = tempList.map((item) => {
      return {
        image: item.imgUrl,
        title: item.id,
      }
    })
  })
}

// 分类九宫格
const categoryList = ref<CategoryItem[]>()
const getHomeCategoryData = async () => {
  await getHomeCategoryAPI().then((res) => {
    categoryList.value = res.result
  })
}

// 热门推荐
const hotPannelList = ref<HotItem[]>()
const getHotPannelData = async () => {
  await getHomeHotAPI().then((res) => {
    hotPannelList.value = res.result
  })
}

onLoad(() => {
  getHomeBannerData()
  getHomeCategoryData()
  getHotPannelData()
})

import vgGuess from '@/components/vg-guess.vue'
import type { VgGuessInstance } from '@/types/component'
const guessRef = ref<VgGuessInstance>()
const onScrolltolower = () => {
  guessRef.value?.getMore()
}
// 下拉刷新状态
const isTriggered = ref(false)
// 自定义下拉刷新被触发
const onRefresherrefresh = async () => {
  // 开启动画
  isTriggered.value = true
  // 重置猜你喜欢组件数据
  guessRef.value?.resetData() // 加载数据
  await Promise.all([getHomeBannerData(), getHomeCategoryData(), getHotPannelData()]) // 关闭动画
  isTriggered.value = false
}
</script>

<template>
  <CustomNavbar></CustomNavbar>

  <!-- 滚动容器 -->
  <scroll-view
    enable-back-to-top
    class="scroll-view"
    :scroll-y="true"
    @scrolltolower="onScrolltolower"
    lower-threshold="100"
    refresher-enabled
    @refresherrefresh="onRefresherrefresh"
    :refresher-triggered="isTriggered"
  >
    <view class="index">
      <u-swiper :list="list"></u-swiper>
    </view>
    <CategoryGrid :categoryList="categoryList"></CategoryGrid>
    <HotPannel :list="hotPannelList"></HotPannel>
    <!-- 猜你喜欢 -->
    <vg-guess ref="guessRef" />
  </scroll-view>
</template>

<style lang="scss">
//
page {
  background-color: $bg-color;
  height: 100%;
  overflow: hidden;
}

.scroll-view {
  flex: 1;
  overflow: hidden;
}
</style>
