<template>
  <div>
    <div class="container blog">
      <div class="row">
        <div class="col-12 col-xl-8 offset-xl-2">
          <h1>Videa</h1>

          <div class="row">
            <div class="col-12 col-md-6 mb-3">
              <div class="iframe-container">
                <iframe
                  class="responsive-iframe"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9eHlygZKYJs"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
              <div class="iframe-container">
                <iframe
                  class="responsive-iframe"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/fan4QjpRb0g"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>

            <div class="col-12 col-md-6 mb-3">
              <div class="iframe-container">
                <iframe
                  class="responsive-iframe"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/AIBvPjf6V7o"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
            <div class="col-12 col-md-6 mb-3">
              <div class="iframe-container">
                <iframe
                  class="responsive-iframe"
                  width="560"
                  height="315"
                  src="https://www.youtube.com/embed/9nR-Hssm73U"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { head } from './../../utils/metatags'

export default {
  layout: 'video',
  head,
}
</script>
<style lang="scss">
@import '~/assets/scss/video.scss';
</style>
