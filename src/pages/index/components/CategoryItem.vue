<script setup lang="ts">
import type { CategoryItem } from '@/types/home'
defineProps({
  value: {
    type: Object as () => CategoryItem,
    requie: true,
    default: () => {},
  },
})
</script>

<template>
  <view class="category-item">
    <image :src="value.icon" mode="scaleToFill" />
    <text>{{ value.name }}</text>
  </view>
</template>

<style lang="scss" scoped>
.category-item {
  display: flex;
  flex-direction: column;
  align-items: center;

  & > image {
    margin-bottom: 8rpx;
    width: 100rpx;
    height: 100rpx;
    border-radius: 10rpx;
  }
  & > text {
    font-size: 25rpx;
  }
}
</style>
