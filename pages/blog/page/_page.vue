<template>
  <div>
    {{ articles }}
    {{ params.page }}
    <Article-list :articles="articles" />
  </div>
</template>

<script>
import ArticleList from '../../../components/ArticleList.vue'
export default {
  layout: 'blog',
  components: { ArticleList },
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
}
</script>
