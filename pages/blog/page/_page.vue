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
import ArticleList from '../../../components/ArticleList.vue'
import { asyncData } from './../../../utils/getArticles'
import Pagination from './../../../components/Pagination'
export default {
  layout: 'blog',
  components: { ArticleList, Pagination },
  asyncData,
}
</script>
