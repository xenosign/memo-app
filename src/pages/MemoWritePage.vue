<template>
  <h2>새 메모 작성</h2>

  <!-- 새로운 메모 제목을 입력 받기 위한 input 태그와 제목 데이터 저장을 위한 v-model -->
  <div>제목: <input v-model="memo.title" /></div>
  <div>
    <!-- 새로운 메모 내용을 입력 받기 위한 textarea 태그와 내용 데이터 저장을 위한 v-model -->
    내용:
    <textarea rows="5" style="width: 100%" v-model="memo.content"></textarea>
  </div>
  <button @click="submit">확인</button>
  <button @click="back">돌아가기</button>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

const BASE = '/api/memo';
const memo = reactive({});
const router = useRouter();

const submit = async () => {
  try {
    // post 메서드와 저장할 메모 데이터를 객체로 만들어서 요청
    const res = await axios.post(BASE, memo);

    // 생성 응답이 성공한 케이스(=201)면 다시 메모 리스트를 보여주는 /memo 주소로 이동
    if (res.status === 201) {
      router.push('/memo');
    } else {
      console.log('목록 생성 실패', res.status);
    }
  } catch (e) {
    console.log('목록 생성 실패', e);
  }
};

// 돌아가기 함수
const back = () => {
  router.push('/memo');
};
</script>
