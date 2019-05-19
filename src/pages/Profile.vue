<template lang="pug">
  div
    div.d-flex.column.align-start
      input(type="text" placeholder="Firstname" v-model="profile.firstname")
      input(type="text" placeholder="Lastname" v-model="profile.lastname")
      input(type="number" placeholder="Age" v-model="profile.age")
      button(@click="updateProfile") Save
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.getters["profile/getProfile"];
    }
  },
  methods: {
    updateProfile() {
      this.$store.dispatch("profile/updateProfile", {
        firstname: this.profile.firstname,
        lastname: this.profile.lastname,
        age: this.profile.age
      });
    }
  }
};
</script>
