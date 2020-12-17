<template>
  <div>
    <div>
      {{ article.slug }}
      <article>
        <nuxt-content :document="article" />
      </article>
    </div>
  </div>
</template>

<script>
export default {
  layout: 'blog',
  async asyncData({ $content, params }) {
    const article = await $content('articles', params.slug).fetch()

    return { article }
  },
}
</script>
