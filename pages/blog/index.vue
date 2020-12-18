<template>
  <div>
    <div class="container blog">
      <div class="row">
        <div class="offset-2 col-8">
          <h1>Blog</h1>
          <div class="row">
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
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    formatDate(date) {
      const options = { year: 'numeric', month: 'long', day: 'numeric' }
      return new Date(date).toLocaleDateString('cs', options)
    },
  },
}
</script>
<style lang="scss">
@import '~/assets/scss/blog.scss';
</style>
