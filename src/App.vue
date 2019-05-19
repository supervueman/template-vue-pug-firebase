<template lang="pug">
  div(id="app")
    toolbar(
      :firstname="profile.firstname"
      :avatarPath="`${staticImgBasePath}/${profile.avatar}`"
    )
    router-view
</template>

<script>
import config from "@/config";
export default {
  name: "app",
  data() {
    return {
      staticImgBasePath: config.staticImgBasePath
    };
  },
  computed: {
    profile() {
      return this.$store.getters["profile/getProfile"];
    }
  },
  beforeCreate() {
    this.$store.dispatch("profile/fetchProfile");
    // this.$store.dispatch("profile/signUp", {
    //   email: "chaogen22@gmail.com",
    //   password: "password",
    //   name: "Rinat"
    // });
  }
};
</script>

<style lang="sass">
#app
  padding: 80px 20px 0 20px
</style>
