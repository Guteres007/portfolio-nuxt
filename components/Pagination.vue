<template>
  <div>
    aa{{ articles }} oof {{ offset }} {{ params }}
    <nuxt-link to="/blog/page/2">Page 2</nuxt-link>
  </div>
</template>

<script>
export default {
  async asyncData({ $content, params }) {
    const limit = 10
    const offset = params.page * 10

    const articles = await $content('articles', params.slug)
      .only(['title', 'description', 'slug', 'img', 'createdAt'])
      .limit(1)
      .skip(1)
      .sortBy('createdAt', 'asc')
      .fetch()

    return {
      limit,
      offset,
      params,
      articles,
    }
  },
}
</script>
