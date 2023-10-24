<template>
  <form @submit.prevent="createStudent">
    <label>
      Призвіще
      <input v-model="userForm.firstName" type="text" minlength="4" required="true" />
    </label>

    <label>
      По батькові
      <input v-model="userForm.lastName" type="text"  minlength="4" required="true" />
    </label>

    <label>
      Рік народження
      <input v-model="userForm.birthYear" type="number" min="1900" required="true"/>
    </label>

    <label>
      Адреса
      <input v-model="userForm.address" type="text" minlength="4" required="true" />
    </label>

    <label>
      Рейтинг
      <input v-model="userForm.rating" type="number" min="0" required="true" />
    </label>

    <button type="submit">Створити</button>
  </form>
</template>

<script>
import { localStorageMixin } from '../mixins/localstorage'

export default {
  mixins: [localStorageMixin],
  data() {
    return {
      userForm: {
        firstName: '',
        lastName: '',
        birthYear: '',
        address: '',
        rating: 0
      }
    }
  },
  methods: {
    createStudent() {
      const data = this.getFromLocalStorage('students', [])

      data.push({ ...this.userForm, id: new Date() })

      this.saveToLocalStorage('students', data)

      this.userForm = {
        firstName: '',
        lastName: '',
        birthYear: '',
        address: '',
        rating: 0
      }
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  width: 50%;
}

button {
  margin-top: 20px;
}
</style>
