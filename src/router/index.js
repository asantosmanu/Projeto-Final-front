import { createRouter, createWebHistory } from 'vue-router';
import LayoutFull from '@/layouts/LayoutFull.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: '',
      component: LayoutFull,
      children: [
        {
          path: '',
          name: 'Home',
          component: () => import('@/views/LoginView.vue'),
        },
        {
          path: '/imoveis/adicionar',
          name: 'ImovelAdd',
          component: () => import('@/views/ImovelAdd.vue'),
        },
        {
          path: '/erro',
          name: "Erro",
          component: () => import('@/views/HomeView.vue'),
        }
      ],
    },
  ],
});

export default router;
