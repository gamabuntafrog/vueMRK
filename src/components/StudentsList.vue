<template>
  <div>
    <h2>Список студентів</h2>
    <div v-if="students.length">
      <input v-model="filterText" placeholder="Фільтр по імені" />
      <ol>
        <StudentItem @deleteStudent="deleteStudent" :student="student" v-for="student in filteredStudents" :key="student.id" />
      </ol>
    </div>
    <h3 v-else>Список пустий</h3>
  </div>
</template>

<script>
import { localStorageMixin } from '../mixins/localstorage'
import StudentItem from './StudentItem.vue'

export default {
  components: {
    StudentItem
  },
  mixins: [localStorageMixin],
  data() {
    return {
      students: [],
      filterText: ''
    }
  },
  computed: {
    filteredStudents() {
      return this.students.filter((el) => el.firstName.includes(this.filterText))
    }
  },
  methods: {
    deleteStudent(id) {
      this.students = this.students.filter((el) => el.id !== id)

      this.saveToLocalStorage('students', this.students)
    }
  },
  beforeMount() {
    this.students = this.getFromLocalStorage('students', [])
  }
}
</script>
