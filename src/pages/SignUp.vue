<template lang="pug">
  div SignUp
    div.from.d-flex.column.align-start
      input(type="text" placeholder="E-mail" v-model="email")
      input(type="password" placeholder="Password" v-model="password")
      button(@click="signup") Sign Up
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
    signup() {
      if (this.email !== "" && this.password !== "") {
        this.$store.dispatch("profile/signUp", {
          email: this.email,
          password: this.password
        });
      }
    }
  }
};
</script>
