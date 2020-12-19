<template>
  <div>
    <div v-if="pages > 1" class="row">
      <div class="container pagination">
        <div class="col-4 offset-4">
          <div class="row">
            <div class="col-6 text-center">
              <nuxt-link
                v-if="prev !== 0"
                class="pagination__left"
                :to="{ name: 'blog-page-page', params: { page: prev } }"
              >
                strana {{ prev }}
              </nuxt-link>
            </div>
            <div class="col-6 text-center">
              <nuxt-link
                v-if="next <= pages"
                class="pagination__right"
                :to="{ name: 'blog-page-page', params: { page: next } }"
                >strana {{ next }}
              </nuxt-link>
            </div>
          </div>
        </div>
      </div>
    </div>
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
      offset: 10,
      limit: 10,
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
