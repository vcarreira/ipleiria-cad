<template>
  <section class="zone box">
      <header>
          <h2>
            <slot name="left-action"></slot>
          {{title}}
          </h2>
          <i v-if="visible" class="fw far fa-window-close" @click="close"></i>
          <i v-else class="fw far fa-plus-square" @click="open"></i>
      </header>
      <slot v-if="visible"></slot>
  </section>
</template>
<script>
export default {
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      visible: true
    }
  },
  methods: {
    close() {
      this.visible = false
    },
    open() {
      this.visible = true
    }
  }

}

</script>
