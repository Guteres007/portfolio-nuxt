<template>
  <div>
    <Nuxt />
    <Footer />
  </div>
</template>

<script>
import Footer from './partials/footer'
export default {
  name: 'Default',

  components: {
    Footer,
  },
}
</script>
<style lang="scss">
@import '~/assets/scss/index.scss';
</style>
