<template>
  <section class="page-section">
    <div class="section-heading">
      <p class="eyebrow">Glaze Library</p>
      <h1>釉方大全</h1>
      <p>精选测试数据，用于验证未来釉方平台的卡片展示、分类与扩展能力。</p>
    </div>

    <div class="glaze-grid">
      <GlazeCard v-for="glaze in glazes" :key="glaze.id" :glaze="glaze" />
    </div>
  </section>
</template>

<script setup>
import GlazeCard from '../components/GlazeCard.vue'

const glazes = [
  {
    id: 1,
    name: '汝窑天青釉',
    kiln: '宋式 · 青瓷',
    description: '温润含蓄的天青色调，适合呈现雨过天晴般的柔和层次。',
    temperature: '1280℃',
    atmosphere: '还原焰',
    color: 'linear-gradient(135deg, #9fb7ae, #d9e2dc)',
  },
  {
    id: 2,
    name: '霁蓝釉',
    kiln: '明式 · 高温颜色釉',
    description: '釉面沉静深邃，蓝色饱满，适合高端器型与陈设器。',
    temperature: '1260℃',
    atmosphere: '氧化焰',
    color: 'linear-gradient(135deg, #12365d, #376c9b)',
  },
  {
    id: 3,
    name: '米黄开片釉',
    kiln: '现代 · 裂纹釉',
    description: '米黄色底釉搭配细密开片，兼具古雅质感与商业适配度。',
    temperature: '1220℃',
    atmosphere: '氧化焰',
    color: 'linear-gradient(135deg, #c9ad7f, #f1e5cb)',
  },
]
</script>
