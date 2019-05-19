<template lang="pug">
  div.page
    div.item(v-for="(user, i) in users" :key="i")
      router-link(:to="`/users/${user.id}`")
        h3 {{user.lastname}} {{user.firstname}}
        div Age: {{user.age}}
        div E-mail: {{user.email}}
</template>

<script>
export default {
  computed: {
    users() {
      return this.$store.getters["users/getUsers"];
    }
  },
  beforeCreate() {
    this.$store.dispatch("users/fetchUsers");
  }
};
</script>
