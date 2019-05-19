<template lang="pug">
  header.toolbar.d-flex.content-sb
    div.d-flex
      link-router.dark(
        to="/users"
        text="users"
        v-if="profileId !== undefined && profileId !== ''"
      )
    div.d-flex
      router-link.toolbar-menu.d-flex.content-center.align-center(
        to="/profile"
        v-if="profileId !== undefined && profileId !== ''"
      )
        avatar(:imagePath="avatarPath")
        h3.name {{firstname}}
      link-router.dark(
        to="/signup"
        text="Sign Up"
        v-if="profileId === '' || profileId === undefined"
      )
      link-router.dark(
        to="/signin"
        text="Sign In"
        v-if="profileId === '' || profileId === undefined"
      )
      button.link(@click="logout" v-if="profileId !== '' && profileId !== undefined") Logout
    
</template>

<script>
export default {
  props: {
    profileId: {
      type: String,
      default: undefined
    },
    firstname: {
      type: String,
      default: "Vue"
    },
    avatarPath: {
      type: String,
      default: "logo.png"
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("profile/logout");
      this.$router.push("/signin");
    }
  }
};
</script>


<style lang="sass">
.toolbar
  position: fixed
  top: 0
  left: 0
  width: 100%
  height: 60px
  padding: 0 20px
  background-color: #000
  .name
    margin-left: 10px
    color: #fff
</style>
