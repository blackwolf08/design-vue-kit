<template>
  <button class='btn' v-bind:class="[className, color ? (outline ? `btn-outline-${color}` : `btn-${color}`) : 'btn-primary' ]"  @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    color: String,
    className: String,
    outline: Boolean
  },
  methods: {
    onClick() {
      this.$emit('click')
    }
  }
}
</script>

<style scoped>

</style>

