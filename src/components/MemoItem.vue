<template>
  <tr>
    <!-- memo 라는 이름의 props 데이터로 받은 메모에 대한 내용을 각각 출력 -->
    <td>{{ memo.id }}</td>
    <td>
      <RouterLink :to="{ name: 'memo/id', params: { id: memo.id } }">
        {{ memo.title }}
      </RouterLink>
    </td>
  </tr>
</template>

<script setup>
// memo props 데이터는 객체이므로 데이터 타입을 객체로 선언
const props = defineProps({
  memo: { type: Object, required: true },
});
</script>
