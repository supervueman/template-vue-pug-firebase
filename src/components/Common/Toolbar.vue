<template lang="pug">
  header.toolbar.d-flex.content-end
    div.toolbar-menu.d-flex.content-center.align-center(
      v-if="profileId !== undefined && profileId !== ''"
    )
      avatar(:imagePath="avatarPath")
      h3.name {{firstname}}
    link-router(to="/signup" text="Sign Up" class="dark")
    link-router(to="/signin" text="Sign In" class="dark")
</template>

<script>
export default {
  props: {
    profileId: {
      type: String
    },
    firstname: {
      type: String,
      default: "Vue"
    },
    avatarPath: {
      type: String,
      default: "logo.png"
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
