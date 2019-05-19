<template lang="pug">
  div.avatar
    img(:src="imagePath", alt="Avatar")
</template>

<script>
import config from "@/config";
export default {
  props: {
    imagePath: {
      type: String,
      default: `${config.staticImgBasePath}/logo.png`
    }
  },
  data() {
    return {
      staticImgBasePath: config.staticImgBasePath
    };
  }
};
</script>

<style lang="sass">
.avatar
  width: 50px
  height: 50px
  border-radius: 100%
  overflow: hidden
  border: 2px solid #fff
  img
    width: 100%
</style>

