<template>
  <section class="page-section glaze-detail-page">
    <RouterLink class="back-link" to="/glazes">返回釉方大全</RouterLink>

    <article v-if="glaze" class="glaze-detail">
      <div class="glaze-detail__swatch" :style="{ background: glaze.color }" />
      <div class="glaze-detail__content">
        <p class="eyebrow">Glaze Detail</p>
        <h1>{{ glaze.name }}</h1>
        <p v-if="glaze.description" class="glaze-detail__description">{{ glaze.description }}</p>

        <dl class="glaze-detail__meta">
          <div>
            <dt>分类</dt>
            <dd>{{ glaze.category }}</dd>
          </div>
          <div>
            <dt>颜色</dt>
            <dd>{{ glaze.colorName }}</dd>
          </div>
          <div>
            <dt>表面效果</dt>
            <dd>{{ glaze.surface }}</dd>
          </div>
          <div>
            <dt>烧成温度</dt>
            <dd>{{ glaze.temperature }}</dd>
          </div>
          <div>
            <dt>烧成气氛</dt>
            <dd>{{ glaze.atmosphere }}</dd>
          </div>
          <div>
            <dt>难度</dt>
            <dd>{{ glaze.difficulty }}</dd>
          </div>
        </dl>
      </div>
    </article>

    <div v-else class="empty-state">
      <p class="eyebrow">Not Found</p>
      <h1>未找到釉方</h1>
      <p>当前测试数据中没有对应的釉方记录。</p>
      <RouterLink class="primary-action" to="/glazes">返回釉方大全</RouterLink>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { glazes } from '../data/glazes'

const route = useRoute()

const glaze = computed(() => glazes.find((item) => item.id === Number(route.params.id)))
</script>