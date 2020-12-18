<template>
  <div>
    <div class="container post">
      <div class="row">
        <div class="offset-2 col-8">
          <img
            v-if="article.img.includes('http')"
            class="img-fluid"
            :src="article.img"
            :alt="article.alt"
          />
          <img v-else :src="'/' + article.img" />
          <h1>{{ article.title }}</h1>
          <strong class="blog__post"
            >Vytvořeno: {{ formatDate(article.createdAt) }}</strong
          >
          <article>
            <nuxt-content :document="article" />
          </article>
          <prev-next :prev="prev" :next="next" />
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

    const [prev, next] = await $content('articles')
      .only(['title', 'slug'])
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
    }
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('cs', options)
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/blog.scss';
</style>
