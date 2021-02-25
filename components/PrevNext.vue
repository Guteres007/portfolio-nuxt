<template>
  <div class="row blog__prev-next mt-4">
    <div class="col-6 col-xl-4 offset-xl-1">
      <NuxtLink
        v-if="prev"
        :to="{ name: 'blog-slug', params: { slug: prev.slug } }"
        class="prev-next__post"
      >
        <div>
          <img
            v-if="prev.img.includes('https')"
            class="img-fluid"
            :src="prev.img"
            :alt="prev.alt"
          />
          <img v-else class="img-fluid" :src="'/' + prev.img" :alt="prev.alt" />
        </div>
        <h3 class="prev-next__title">
          {{ prev.title }}
        </h3>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
    <div class="col-6 col-xl-4 offset-xl-2">
      <NuxtLink
        v-if="next"
        :to="{ name: 'blog-slug', params: { slug: next.slug } }"
        class="prev-next__post"
      >
        <div>
          <img
            v-if="next.img.includes('https')"
            class="img-fluid"
            :src="next.img"
            :alt="next.alt"
          />
          <img v-else class="img-fluid" :src="'/' + next.img" :alt="next.alt" />
        </div>
        <h3 class="prev-next__title">
          {{ next.title }}
        </h3>
      </NuxtLink>
      <span v-else>&nbsp;</span>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    prev: {
      type: Object,
      default: () => null,
    },
    next: {
      type: Object,
      default: () => null,
    },
  },
}
</script>

<style lang="scss">
@import '~/assets/scss/blog.scss';
</style>
