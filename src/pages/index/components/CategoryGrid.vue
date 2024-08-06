<script setup lang="ts">
import CateItem from './CategoryItem.vue'
import type { CategoryItem } from '@/types/home'
defineProps({
  categoryList: {
    type: Array as () => CategoryItem[],
    requie: true,
    default: () => [],
  },
})
</script>

<template>
  <view class="category-list">
    <view v-for="item in categoryList" :key="item.id" class="category-list-item">
      <CateItem :value="item"></CateItem>
    </view>
  </view>
</template>

<style lang="scss" scoped>
.category-list {
  padding: 10rpx 13rpx;
  display: flex;
  justify-content: space-around;
  flex-wrap: wrap;

  .category-list-item {
    margin: 10rpx 15rpx;
  }
}
</style>
