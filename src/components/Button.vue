<template>
  <button class='btn' v-bind:class="[className, color ? (outline ? `btn-outline-${color}` : `btn-${color}`) : 'btn-primary',size ? `btn-${size}` : 'btn-lg', block ? 'd-block' : 'd-inline' ]"  @click="onClick">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'Button',
  props: {
    msg: String,
    color: String,
    size: String,
    className: String,
    outline: Boolean,
    block: Boolean
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

