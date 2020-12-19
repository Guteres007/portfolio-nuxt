<template>
  <div>
    <nuxt-link
      v-if="prev !== 0"
      :to="{ name: 'blog-page-page', params: { page: prev } }"
      >Page {{ prev }}</nuxt-link
    >
    <nuxt-link
      v-if="next <= pages"
      :to="{ name: 'blog-page-page', params: { page: next } }"
      >Page {{ next }}
    </nuxt-link>
  </div>
</template>

<script>
export default {
  props: {
    articles: {
      type: Array,
      default: Array,
    },
    pagingForArticles: {
      type: Array,
      default: Array,
    },
  },
  data() {
    return {
      offset: 1,
      limit: 1,
      pages: null,
    }
  },
  computed: {
    prev() {
      if (this.pages <= 0 || typeof this.$route.params.page === 'undefined') {
        return 0
      }
      return +this.$route.params.page - 1
    },
    next() {
      if (this.pages > 1 && typeof this.$route.params.page === 'undefined') {
        return 2
      }
      return +this.$route.params.page + 1
    },
  },
  mounted() {
    this.getNumberOfPages()
  },
  methods: {
    getNumberOfPages() {
      this.pages = this.pagingForArticles.length / this.limit
    },
    getSkipPages() {
      return this.pages * this.offset
    },
  },
}
</script>
