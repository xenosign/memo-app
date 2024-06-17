import MemoDetailPage from '@/pages/MemoDetailPage.vue';
import MemoWritePage from '@/pages/MemoWritePage.vue';
import { createRouter, createWebHistory } from 'vue-router';
const MemoListPage = () => import('@/pages/MemoListPage.vue');

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  // 각각의 주소 요청에 맞는 컴포넌트를 임포트하여 연결
  routes: [
    { path: '/', name: 'home', component: MemoListPage },
    // 1.	라우터 테이블을 완성하세요.
    { path: '/memo', name: 'memo', component: MemoListPage },
    { path: '/memo/view/:id', name: 'memo/id', component: MemoDetailPage },
    { path: '/memo/write', name: 'memo/write', component: MemoWritePage },
  ],
});

export default router;
