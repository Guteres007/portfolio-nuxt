<template>
  <div>
    <div class="container blog">
      <div class="row">
        <div class="col-12 col-xl-8 offset-xl-2">
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
import { head } from './../../utils/metatags'
import { formatDate } from './../../utils/formatDate'
import { asyncData } from './../../utils/getArticles'
export default {
  components: { ArticleList, Pagination },
  layout: 'blog',
  asyncData,
  methods: {
    formatDate,
  },
  head,
}
</script>
<style lang="scss">
@import '~/assets/scss/blog.scss';
</style>
