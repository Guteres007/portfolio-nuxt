<template>
  <div>
    <div class="col-12">
      <ul v-for="article of articles" :key="article.slug" class="list-unstyled">
        <li v-if="article.internal === false">
          <NuxtLink
            :to="{ name: 'blog-slug', params: { slug: article.slug } }"
            class="d-flex row blog__item"
          >
            <div class="col-12 col-sm-6">
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
            <div class="col-12 col-sm-6">
              <h2 class="title">{{ article.title }}</h2>
              <p class="description d-none d-lg-block">
                {{ article.description }}
              </p>
              <p class="date">{{ formatDate(article.createdAt) }}</p>
            </div>
          </NuxtLink>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
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
