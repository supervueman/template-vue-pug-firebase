<template lang="pug">
  div SignIn
    div.from.d-flex.column.align-start
      input(type="text" placeholder="E-mail" v-model="email")
      input(type="password" placeholder="Password" v-model="password")
      button(@click="signin") Sign In
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: ""
    };
  },
  methods: {
    signin() {
      if (this.email !== "" && this.password !== "") {
        this.$store.dispatch("profile/signIn");
      }
    }
  }
};
</script>
