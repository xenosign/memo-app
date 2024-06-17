<template>
  <ul>
    <!-- props 로 받은 배열 데이터를 v-for 를 통해 각각 하나씩 쪼개서 MemoItem 컴포넌트에 memo 라는 이름의 props 로 전달 -->
    <MemoItem v-for="memo in memos" :memo="memo"></MemoItem>
  </ul>
</template>

<script setup>
// v-for 를 통해 각각의 메모 내용을 그려줄 MemoItem 컴포넌트 임포트
import MemoItem from '@/components/MemoItem.vue';
// props 데이터 선언을 위한 defineProps 임포트
import { defineProps } from 'vue';

// memos 라는 이름으로 메모 배열 데이터를 받으므로, 데이터 타입을 배열로 선언
const props = defineProps({
  memos: {
    type: Array,
    required: true,
  },
});
</script>
