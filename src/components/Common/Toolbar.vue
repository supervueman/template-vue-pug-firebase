<template lang="pug">
  header.toolbar.d-flex.content-end
    h3.toolbar-menu.d-flex.content-center.align-center
      avatar(:imagePath="avatarPath")
      div.name {{firstname}}
</template>

<script>
export default {
  props: {
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
