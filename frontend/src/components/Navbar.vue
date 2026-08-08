<template>
  <header class="navbar">
    <RouterLink class="brand" to="/" aria-label="返回守艺人首页">
      <span class="brand-mark">守</span>
      <span class="brand-text">守艺人</span>
    </RouterLink>

    <nav class="nav-links" aria-label="主导航">
      <RouterLink to="/">首页</RouterLink>
      <RouterLink to="/glazes">釉方大全</RouterLink>
      <RouterLink class="login-link" to="/login">登录</RouterLink>
    </nav>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
