<template>
  <div>
    <div v-for="article of articles" :key="article.slug" class="col-12">
      <ul class="list-unstyled">
        <li>
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="d-flex row blog__item"
          >
            <div class="col-6">
              <img
                v-if="article.img.includes('http')"
                class="img-fluid"
                :src="article.img"
                :alt="article.alt"
              />
              <img
                v-else
                :src="'/' + article.img"
                class="img-fluid"
                :alt="article.alt"
              />
            </div>
            <div class="col-6">
              <h2 class="title">{{ article.title }}</h2>
              <p class="description">{{ article.description }}</p>
              <p class="date">{{ formatDate(article.createdAt) }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
    <Pagination />
  </div>
</template>

<script>
import Pagination from './Pagination.vue'
export default {
  components: { Pagination },
  props: {
    articles: {
      type: Array,
      default: Array,
    },
  },

  methods: {
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('cs', options)
    },
  },
}
</script>
