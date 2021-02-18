<template>
  <div>
    <div class="container post">
      <div class="row">
        <div class="col-12 col-xl-8 offset-xl-2">
          <img
            v-if="article.img.includes('http')"
            class="img-fluid"
            :src="article.img"
            :alt="article.alt"
          />
          <img v-else :src="'/' + article.img" class="img-fluid" />
          <h1>{{ article.title }}</h1>
          <strong class="blog__post"
            >Vytvořeno: {{ formatDate(article.createdAt) }}</strong
          >
          <article class="blog-content">
            <nuxt-content :document="article" />
          </article>
          <template v-if="prev || next">
            <hr />
            <h2>Následující články</h2>
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
    }
  },

  methods: {
    formatDate,
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/blog.scss';
</style>
