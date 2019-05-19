<template lang="pug">
  div.link.d-flex.align-center.content-center
    router-link.d-flex.align-center.content-center(:to="to") {{text}}
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      require: true,
      default: "/"
    },
    text: {
      type: String,
      default: "Link"
    }
  }
};
</script>

<style lang="sass">
.link
  margin: 0 20px
  cursor: pointer
  a
    font-size: 18px
    height: 100%
    text-align: center
.dark.link
  a
    color: #fff
    background-color: #000
.light.link
  a
    color: #000
    background-color: #fff
</style>

