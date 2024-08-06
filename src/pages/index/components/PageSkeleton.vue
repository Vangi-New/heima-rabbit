<!--
此文件为开发者工具生成，生成时间: 2024/8/6下午12:40:46
使用方法：
在 E:\Study\Practise\前端\heima-rabbit\dist\dev\mp-weixin\pages\index\index.wxml 引入模板

```
<import src="index.skeleton.wxml"/>
<template is="skeleton" wx:if="{{loading}}" />
```

在 E:\Study\Practise\前端\heima-rabbit\dist\dev\mp-weixin\pages\index\index.wxss 中引入样式
```
@import "./index.skeleton.wxss";
```

更多详细信息可以参考文档：https://developers.weixin.qq.com/miniprogram/dev/devtools/skeleton.html
-->
<template name="skeleton">
  <view class="index index u-skeleton-rect u-skeleton-rect">
    <view is="node-modules/vk-uview-ui/components/u-swiper/u-swiper">
      <view
        class="u-swiper-wrap swiper--u-swiper-wrap data-v-4b780b2e swiper--data-v-4b780b2e"
        style="border-radius: 4px"
      >
        <swiper
          class="data-v-4b780b2e swiper--data-v-4b780b2e"
          current="0"
          duration="500"
          interval="3000"
          next-margin="0"
          previous-margin="0"
          style="height: 138px; background-color: #f3f4f6"
          autoplay="false"
          circular="true"
        ></swiper>
        <view
          class="u-swiper-indicator swiper--u-swiper-indicator data-v-4b780b2e swiper--data-v-4b780b2e"
          style="top: auto; bottom: 6px; justify-content: center; padding: 0 13px"
        >
          <view
            class="u-indicator-item-round swiper--u-indicator-item-round data-v-4b780b2e swiper--data-v-4b780b2e"
          >
          </view>
          <view
            class="u-indicator-item-round swiper--u-indicator-item-round data-v-4b780b2e swiper--data-v-4b780b2e"
          >
          </view>
          <view
            class="u-indicator-item-round swiper--u-indicator-item-round data-v-4b780b2e swiper--data-v-4b780b2e"
          >
          </view>
          <view
            class="u-indicator-item-round swiper--u-indicator-item-round data-v-4b780b2e swiper--data-v-4b780b2e"
          >
          </view>
          <view
            class="u-indicator-item-round swiper--u-indicator-item-round data-v-4b780b2e swiper--data-v-4b780b2e u-indicator-item-round-active swiper--u-indicator-item-round-active"
          >
          </view>
        </view>
      </view>
    </view>
  </view>
  <view is="pages/index/components/CategoryGrid">
    <view
      class="category-list CategoryGrid--category-list data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
    >
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-889 sk-text"
              >居家</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-824 sk-text"
              >锦鲤</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-885 sk-text"
              >服饰</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-270 sk-text"
              >母婴</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-112 sk-text"
              >个护</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-381 sk-text"
              >严选</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-723 sk-text"
              >数码</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-542 sk-text"
              >运动</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-938 sk-text"
              >杂项</text
            >
          </view>
        </view>
      </view>
      <view
        class="category-list-item CategoryGrid--category-list-item data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
      >
        <view
          is="pages/index/components/CategoryItem"
          class="data-v-4065c2ff CategoryGrid--data-v-4065c2ff"
        >
          <view
            class="category-item CategoryItem--category-item data-v-0472f9a0 CategoryItem--data-v-0472f9a0"
          >
            <image
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-image"
              mode="scaleToFill"
            >
            </image>
            <text
              class="data-v-0472f9a0 CategoryItem--data-v-0472f9a0 sk-transparent sk-text-14-2857-46 sk-text"
              >品牌</text
            >
          </view>
        </view>
      </view>
    </view>
  </view>
  <view is="pages/index/components/HotPannel">
    <view class="panel HotPannel--panel hot HotPannel--hot">
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-383 sk-text"
            >特惠推荐</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-971 sk-text"
            >精选全攻略</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-881 sk-text"
            >爆款推荐</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-226 sk-text"
            >最受欢迎</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-257 sk-text"
            >一站买全</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-791 sk-text"
            >精心优选</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
      <view class="item HotPannel--item">
        <view class="title HotPannel--title">
          <text class="title-text HotPannel--title-text sk-transparent sk-text-14-2857-123 sk-text"
            >新鲜好物</text
          >
          <text class="title-desc HotPannel--title-desc sk-transparent sk-text-14-2857-845 sk-text"
            >生活加分项</text
          >
        </view>
        <navigator class="cards HotPannel--cards" hover-class="none">
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
          <image class="image HotPannel--image sk-image" mode="aspectFit"></image>
        </navigator>
      </view>
    </view>
  </view>
  <view is="components/vg-guess" class="r r">
    <view class="caption guess--caption">
      <text
        class="text guess--text sk-transparent sk-text-0-0000-329 sk-text sk-pseudo sk-pseudo-circle"
        >猜你喜欢</text
      >
    </view>
    <view class="guess guess--guess">
      <navigator class="guess-item guess--guess-item">
        <image class="image guess--image sk-image" mode="aspectFill"></image>
      </navigator>
      <navigator class="guess-item guess--guess-item">
        <image class="image guess--image sk-image" mode="aspectFill"></image>
      </navigator>
    </view>
  </view>
</template>

<style>
.sk-transparent {
  color: transparent !important;
}

.sk-text-3-3333-926 {
  background-image: linear-gradient(
    transparent 3.3333%,
    #eeeeee 0%,
    #eeeeee 96.6667%,
    transparent 0%
  ) !important;
  background-size: 100% 27.1739rpx;
  position: relative !important;
}

.sk-text {
  background-origin: content-box !important;
  background-clip: content-box !important;
  background-color: transparent !important;
  color: transparent !important;
  background-repeat: repeat-y !important;
}

.sk-text-14-2857-438 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 38.0435rpx;
  position: relative !important;
}

.sk-text-14-2857-889 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-824 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-885 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-270 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-112 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-381 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-723 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-542 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-938 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-46 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-383 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-971 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-881 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-226 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-257 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-791 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-14-2857-123 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 43.1159rpx;
  position: relative !important;
}

.sk-text-14-2857-845 {
  background-image: linear-gradient(
    transparent 14.2857%,
    #eeeeee 0%,
    #eeeeee 85.7143%,
    transparent 0%
  ) !important;
  background-size: 100% 32.971rpx;
  position: relative !important;
}

.sk-text-0-0000-329 {
  background-image: linear-gradient(
    transparent 0%,
    #eeeeee 0%,
    #eeeeee 100%,
    transparent 0%
  ) !important;
  background-size: 100% 30.7971rpx;
  position: relative !important;
}

.sk-image {
  background: #efefef !important;
}

.sk-pseudo::before,
.sk-pseudo::after {
  background: #efefef !important;
  background-image: none !important;
  color: transparent !important;
  border-color: transparent !important;
}

.sk-pseudo-rect::before,
.sk-pseudo-rect::after {
  border-radius: 0 !important;
}

.sk-pseudo-circle::before,
.sk-pseudo-circle::after {
  border-radius: 50% !important;
}

.sk-container {
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: hidden;
  background-color: transparent;
}
</style>
