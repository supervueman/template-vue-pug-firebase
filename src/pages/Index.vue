<template lang="pug">
  div.page.d-flex.align-center.content-center
    div.profile-card.d-flex.column.align-center.content-center
      h1 Hello {{profile.firstname}}
</template>

<script>
import config from "@/config";
export default {
  data() {
    return {
      staticImgBasePath: config.staticImgBasePath
    };
  },
  computed: {
    profile() {
      return this.$store.getters["profile/getProfile"];
    }
  }
};
</script>

<style lang="sass">
.page
  .profile-card
    width: 400px
    background-color: #000
    color: #fff
    padding: 20px
    .name
      margin-top: 20px
    .avatar
      width: 150px
      height: 150px
</style>

