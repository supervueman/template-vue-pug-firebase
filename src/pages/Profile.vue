<template lang="pug">
  div {{profile}}
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
