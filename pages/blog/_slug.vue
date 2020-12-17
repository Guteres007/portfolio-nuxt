<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <img
            v-if="article.img.includes('http')"
            class="img-fluid"
            :src="article.img"
            :alt="article.alt"
          />
          <img v-else :src="'/' + article.img" />

          <p>Post last updated: {{ formatDate(article.updatedAt) }}</p>
          <article>
            <nuxt-content :document="article" />
          </article>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('cs', options)
    },
  },
}
</script>
