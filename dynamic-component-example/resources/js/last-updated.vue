<template>
  <span>
    <span v-if="timestamp">{{timestamp.fromNow()}}</span>
  </span>
</template>
<script>
const moment = require('moment')
export default {
  props: {
    timestamp: {
      required: false
    },
    intervalMillis: {
      type: Number,
      default: 1000
    },
  },
  data() {
    return {
      timer: null,
    }
  },
  mounted() {
    this.timer = window.setInterval(() => this.$forceUpdate(), this.intervalMillis)
  },
  beforeDestroy() {
    window.clearInterval(this.timer)
  }
}
</script>
