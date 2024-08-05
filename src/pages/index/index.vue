<script setup lang="ts">
import { ref } from 'vue'

//
const show = ref(false)
const mode = ref('date')
</script>

<template>
  <view class="index">
    <u-calendar v-model="show" :mode="mode"></u-calendar>
    <u-button @click="show = true">打开</u-button>
    <view>xxxxxx11111</view>
  </view>
</template>

<style lang="scss">
//
</style>
