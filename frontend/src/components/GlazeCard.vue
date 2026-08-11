<template>
  <RouterLink
    class="glaze-card"
    :to="`/glazes/${glaze.id}`"
    :aria-label="`查看${glaze.name}详情`"
  >
    <article>
      <div
        class="glaze-card__swatch"
        :style="{ background: glaze.color }"
      />

      <div class="glaze-card__content">
        <p class="glaze-card__kiln">
          {{ glaze.kiln }}
        </p>

        <h3>
          {{ glaze.name }}
        </h3>

        <p>
          {{ glaze.description }}
        </p>

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
  </RouterLink>
</template>

<script setup>
import { RouterLink } from 'vue-router'

defineProps({
  glaze: {
    type: Object,
    required: true,
  },
})
</script>
