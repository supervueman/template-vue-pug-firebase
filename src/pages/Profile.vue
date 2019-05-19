<template lang="pug">
  div {{profile}}
    div.d-flex.column.align-start
      input(type="text" placeholder="Firstname")
      input(type="text" placeholder="Lastname")
      input(type="text" placeholder="Age")
      button Save
</template>

<script>
export default {
  computed: {
    profile() {
      return this.$store.getters["profile/getProfile"];
    }
  }
};
</script>
