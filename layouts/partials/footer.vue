<template>
  <div>
    <div class="footer text-center">
      <p>Martin Andráši | {{ getFullYear }}</p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Footer',
  computed: {
    getFullYear() {
      const date = new Date()
      return date.getFullYear()
    },
  },
}
</script>
