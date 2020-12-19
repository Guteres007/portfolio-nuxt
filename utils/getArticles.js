export const asyncData = async ({ $content, params }) => {
  const limit = 1
  const offset = 1
  const skip = (params.page - 1) * offset

  const articles = await $content('articles', params.slug)
    .only(['title', 'description', 'slug', 'img', 'createdAt'])
    .limit(limit)
    .skip(skip)
    .sortBy('createdAt', 'asc')
    .fetch()

  const pagingForArticles = await $content('articles', params.slug)
    .only(['title', 'description', 'slug', 'img', 'createdAt'])
    .sortBy('createdAt', 'asc')
    .fetch()

  return {
    params,
    articles,
    pagingForArticles,
  }
}
