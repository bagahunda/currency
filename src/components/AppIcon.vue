<template>
  <svg
    class="svg-icon"
    :style="iconStyle"
  >
    <use :xlink:href="`#${icon}`" />
  </svg>
</template>

<script>
export default {
  name: 'SvgIcon',
  props: {
    icon: {
      type: String,
      required: true
    },

    color: {
      type: String,
      default: 'currentColor'
    },

    size: {
      type: [String, Number],
      default: 16
    }
  },

  computed: {
    iconStyle () {
      let str = ''
      if (this.color) {
        str += `fill: ${this.color};`
      }
      if (this.size) {
        str += `width: ${this.size}px; height: ${this.size}px;`
      }
      return str
    }
  }
}
</script>

<style lang="scss" scoped>
.svg-icon {
  fill: currentColor;
  height: 1em;
  width: 1em;
  margin-bottom: 0.125em;
  vertical-align: middle;
}
</style>
