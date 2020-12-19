<template>
  <div>
    <div class="container blog">
      <div class="row">
        <div class="offset-2 col-8">
          <h1>Blog</h1>
          <div class="row">
            <Article-list :articles="articles" />
          </div>
          <Pagination
            :paging-for-articles="pagingForArticles"
            :articles="articles"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ArticleList from '../../components/ArticleList.vue'
import Pagination from '../../components/Pagination'
import { formatDate } from './../../utils/formatDate'
import { asyncData } from './../../utils/getArticles'
export default {
  components: { ArticleList, Pagination },
  layout: 'blog',
  asyncData,

  methods: {
    formatDate,
  },
}
</script>
<style lang="scss">
@import '~/assets/scss/blog.scss';
</style>
