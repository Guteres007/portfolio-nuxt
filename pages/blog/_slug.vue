<template>
  <div>
    <div class="container post">
      <div class="row">
        <div class="col-12 col-xl-8 offset-xl-2">
          <h1>{{ article.title }}</h1>
          <strong v-if="article.date.length" class="blog__post"
            >Publikováno:
            {{ article.date || formatDate(article.createdAt) }}</strong
          >
          <article class="blog-content">
            <nuxt-content :document="article" />
          </article>

          <template v-if="prev || next">
            <hr />
            <h2 class="text-center">Články, které vás mohou také zajímat</h2>
            <prev-next :prev="prev" :next="next" />
          </template>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { formatDate } from './../../utils/formatDate'
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()
    const urlParameters = params
    const [prev, next] = await $content('articles')
      .only(['title', 'slug', 'img', 'alt', 'internal'])
      .where({ internal: false })
      .sortBy('createdAt', 'asc')
      .surround(params.slug)
      .fetch()

    return {
      article,
      prev,
      next,
      urlParameters,
    }
  },

  methods: {
    formatDate,
  },

  head() {
    return {
      title: 'Martin Andráši | ' + this.article.title,
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: this.article.description,
        },
        {
          property: 'og:title',
          content: 'Martin Andráši | ' + this.article.title,
        },
        {
          property: 'og:url',
          content: 'https://www.andrasi.cz/blog/' + this.urlParameters.slug,
        },
        {
          property: 'og:description',
          content: this.article.description,
        },
        {
          property: 'og:image',
          content: 'http://www.andrasi.cz/' + this.article.img,
        },
      ],
    }
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/blog.scss';
</style>
