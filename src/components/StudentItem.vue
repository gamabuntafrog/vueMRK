<template>
  <li>
    <h2>{{ student.firstName }} {{ student.lastName }}</h2>
    <p>{{ student.birthYear }} року народження</p>
    <p>{{ student.address }}</p>
    <p>{{ student.rating }}</p>

    <button @click="$emit('deleteStudent', student.id)">Видалити</button>
  </li>
</template>

<script>
export default {
  props: {
    student: Object
  }
}
</script>
