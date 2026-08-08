<template>
  <section class="hero page-section">
    <div class="hero__content">
      <p class="eyebrow">Chinese Ceramic Glaze Archive</p>
      <h1>守艺人</h1>
      <h2>陶瓷釉方数据库</h2>
      <p class="hero__description">
        以东方器物审美为底色，沉淀、检索与分享陶瓷釉方知识，构建面向未来的手艺数字平台。
      </p>
      <RouterLink class="primary-action" to="/glazes">浏览釉方</RouterLink>
    </div>
    <div class="hero__vessel" aria-hidden="true">
      <div class="vase" />
    </div>
  </section>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
