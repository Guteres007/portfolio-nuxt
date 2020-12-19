<template>
  <div>
    <Article-list :articles="articles" />
    <Pagination :paging-for-articles="pagingForArticles" :articles="articles" />
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
