<template>
  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="col-6 d-flex align-items-center">
          <NuxtLink to="/" class="menu-anchor"> Martin Andráši </NuxtLink>
        </div>
        <div class="col-6 d-lg-none text-right">
          <span @click="openMenu">Menu</span>
        </div>
        <div
          v-show="menuOpen"
          class="col-12 col-lg-6 d-lg-flex align-items-center justify-content-end mobile-menu"
        >
          <NuxtLink
            to="/blog/reference"
            class="menu-anchor menu-anchor--mr odkaz"
            @click.native="openMenu"
          >
            Reference
          </NuxtLink>

          <NuxtLink
            to="/blog"
            class="menu-anchor menu-anchor--mr odkaz"
            @click.native="openMenu"
          >
            Blog
          </NuxtLink>
          <NuxtLink
            to="/cenik"
            class="menu-anchor menu-anchor--mr odkaz"
            @click.native="openMenu"
          >
            Ceník
          </NuxtLink>
          <NuxtLink
            to="/#kontakt"
            class="button--orange odkaz"
            @click.native="openMenu"
          >
            Kontakt
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Menu',
  directives: {
    ClickOutside,
  },

  data() {
    return {
      menuOpen: false,
    }
  },
  methods: {
    hideMenu() {
      this.menuOpen = false
    },
    openMenu() {
      this.menuOpen = !this.menuOpen
    },
  },
}
</script>
