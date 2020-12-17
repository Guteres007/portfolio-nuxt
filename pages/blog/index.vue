<template>
  <div>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <h1>Články</h1>
          <ul class="list-unstyled">
            <li v-for="article of articles" :key="article.slug">
              <NuxtLink
                :to="{ name: 'blog-slug', params: { slug: article.slug } }"
              >
                <img
                  v-if="article.img.includes('http')"
                  class="img-fluid"
                  :src="article.img"
                  :alt="article.alt"
                />
                <img v-else :src="'/' + article.img" />
                <div>
                  <h2>{{ article.title }}</h2>
                  <p>{{ article.description }}</p>
                </div>
              </NuxtLink>
            </li>
          </ul>
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
      .only(['title', 'description', 'slug', 'img'])
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      params,
      articles,
    }
  },
}
</script>
