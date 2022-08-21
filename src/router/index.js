import { createRouter, createWebHistory } from 'vue-router'
import HRInfo from '@/components/HRInfo'
import RecruitingProcessMenu from '@/components/RecruitingProcessMenu'
import ComponentsProcessMenu from '@/components/ComponentsProcessMenu'

export const router = createRouter({
  history : createWebHistory(),
  routes : [{
    path: '/',
    name: 'HRInfo',
    component: HRInfo
  },
  {
    path: '/RecruitingProcess',
    name: 'RecruitingProcessMenu',
    component: RecruitingProcessMenu
  },
  {
    path: '/ComponentsProcess',
    name: 'ComponentsProcessMenu',
    component: ComponentsProcessMenu
  }]
})

export default router;