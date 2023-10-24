import { createRouter, createWebHistory } from 'vue-router'
import TheWelcome from '../components/TheWelcome.vue'
import CreateStudent from '../components/CreateUserForm.vue'
import StudentsList from '../components/StudentsList.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: TheWelcome
    },
    {
      path: '/createStudent',
      name: 'createStudent',
      component: CreateStudent
    },
    {
      path: '/students',
      name: 'studentsList',
      component: StudentsList
    },
  ]
})

export default router
