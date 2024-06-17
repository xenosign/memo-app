<template>
  <div>
    <!-- 서버로 부터 받은 특정 메모 데이터를 출력 -->
    <h2>제목: {{ memo.title }}</h2>
    <hr />
    {{ memo.content }}
    <div>
      <button @click="back">돌아가기</button>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import axios from 'axios';

// 데이터 요청을 위한 기본 주소 설정
const BASE = '/api/memo';

// 현재 주소로 전달 된 id 값을 받기 위한 currentRoute 선언
const currentRoute = useRoute();
// 작업 처리 후, 특정 주소로 이동하기 위한 router 선언
const router = useRouter();
// memo/ 주소 뒤에 파라미터로 전달 된 id 값을 id 변수에 저장
const id = currentRoute.params.id;
// 서버로 부터 받은 메모 세부 데이터를 저장하기 위한 반응형 데이터 선언
const memo = ref({});

const load = async () => {
  try {
    // 파라미터로 전달 된 id 값과 기본 주소를 더하여 특정 메모에 대한 정보를 요청
    const url = `${BASE}/${id}`;
    const res = await axios.get(url);

    // 응답이 정상(200) 인 경우, 해당 데이터를 반응형 데이터에 저장
    if (res.status === 200) {
      memo.value = res.data;
    } else {
      console.log(`${id} 얻기 실패!`);
    }
  } catch (e) {
    console.log(`${id} 얻기 실패!`, e);
  }
};

// 돌아가기 버튼이 클릭 되면, 메모 리스트를 보여주는 /memo 주소로 이동하는 함수
const back = () => {
  router.push('/memo');
};

load(); //초기 데이터 로드 함수 호출
</script>
