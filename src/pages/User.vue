<template lang="pug">
  div.page.d-flex.align-center.content-center
    div.card.d-flex.column.align-center.content-center
      h3 {{user.lastname}} {{user.firstname}}
      div Age: {{user.age}}
      div E-mail: {{user.email}}
</template>

<script>
export default {
  computed: {
    user() {
      return this.$store.getters["user/getUser"];
    }
  },
  beforeCreate() {
    this.$store.dispatch("user/fetchUser", this.$route.params.slug);
  }
};
</script>
