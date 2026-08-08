<template>
  <article class="glaze-card">
    <div class="glaze-card__swatch" :style="{ background: glaze.color }" />
    <div class="glaze-card__content">
      <p class="glaze-card__kiln">{{ glaze.kiln }}</p>
      <h3>{{ glaze.name }}</h3>
      <p>{{ glaze.description }}</p>
      <dl>
        <div>
          <dt>烧成</dt>
          <dd>{{ glaze.temperature }}</dd>
        </div>
        <div>
          <dt>气氛</dt>
          <dd>{{ glaze.atmosphere }}</dd>
        </div>
      </dl>
    </div>
  </article>
</template>

<script setup>
defineProps({
  glaze: {
    type: Object,
    required: true,
  },
})
</script>
