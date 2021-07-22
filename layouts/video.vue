<template>
  <div>
    <Menu />
    <Nuxt />
    <Footer />
  </div>
</template>
<script>
import Footer from './partials/footer'
import Menu from './partials/menu'
export default {
  name: 'Video',

  components: {
    Footer,
    Menu,
  },
}
</script>
