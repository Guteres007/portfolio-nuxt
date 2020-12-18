<template>
  <div>
    <div class="container blog">
      <div class="row">
        <div class="offset-2 col-8">
          <h1>Blog</h1>
          <div class="row">
            <Article-list :articles="articles" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '../../components/ArticleList.vue'
import { formatDate } from './../../utils/formatDate'
export default {
  components: { ArticleList },
  layout: 'blog',
  async asyncData({ $content, params }) {
    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'img', 'createdAt'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      params,
      articles,
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
