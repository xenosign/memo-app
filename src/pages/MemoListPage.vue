<template>
  <div>
    <h2>Memo 목록</h2>
    <!-- MemoList 컴포넌트에 서버로 부터 받아온 메모 배열 전체를 props 로 전달 -->
    <MemoList :memos="memos" />

    <div>
      <!-- 라우터를 통해 새로운 메모를 작성하는 페이지로 이동하는 링크 -->
      <router-link to="/memo/write">새 메모</router-link>
    </div>
  </div>
</template>

<script setup>
import MemoList from '@/components/MemoList.vue';
import { ref } from 'vue';
import axios from 'axios';

// /api 주소 요청은 vite.config.js 에 설정으로 인하여 자동으로 json-server 주소인 http://localhost:3000/ 으로 변경되어 전달
// memo 데이터는 memo 주소 요청으로 부터 받을 수 있으므로 해당 주소로 정보 요청
const BASE = '/api/memo';

// memo 배열을 저장하기 위한 반응형 데이터 선언
const memos = ref([]);

async function load() {
  // 예상치 못한 에러 처리를 위한 try-catch 문 적용
  try {
    // BASE 에 저장된 기본 요청 주소로 데이터 목록 요청
    const res = await axios.get(BASE);

    // 응답이 제대로 온 경우 선언해둔 반응형 데이터에 서버에서 받은 배열을 저장
    if (res.status === 200) {
      memos.value = res.data;
    } else {
      // 응답을 제대로 받지 못한 경우 console.log 로 에러 출력
      console.log('목록 요청 에러', res.status);
    }
    // 예상치 못한 에러는 catch 문으로 처리
  } catch (e) {
    console.log('목록 요청 에러 ', e);
  }
}

load(); //초기 데이터 로드 함수 호출
</script>
