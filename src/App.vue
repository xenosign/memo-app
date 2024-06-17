<script setup>
import { RouterView, RouterLink } from 'vue-router';
</script>

<template>
  <!-- 기본 주소(/) 와 메모 주소(/memo) 로 이동 가능한 RouterLink 설정 -->
  <RouterLink to="/">home</RouterLink>
  &nbsp;
  <RouterLink to="/memo">memo</RouterLink>
  <h1>메모 앱</h1>
  <!-- router/index.js 에서 설정한 컴포넌트가 실제로 출력되는 RouterView 설정 -->
  <RouterView />
</template>

<style scoped></style>
