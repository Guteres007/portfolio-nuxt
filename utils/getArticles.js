export const asyncData = async ({ $content, params }) => {
  const limit = 10
  const offset = 10
  const skip = (params.page - 1) * offset

  const articles = await $content('articles', params.slug)
    .only(['title', 'description', 'slug', 'img', 'createdAt', 'internal'])
    .where({ internal: false })
    .limit(limit)
    .skip(skip)
    .sortBy('createdAt', 'desc')
    .fetch()

  const pagingForArticles = await $content('articles', params.slug)
    .only(['title', 'description', 'slug', 'img', 'createdAt', 'internal'])
    .where({ internal: false })
    .sortBy('createdAt', 'asc')
    .fetch()

  return {
    params,
    articles,
    pagingForArticles,
  }
}
