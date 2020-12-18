<template>
  <div class="menu">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 d-flex align-items-center">
          <a href="/" class="menu-anchor">Martin Andráši</a>
        </div>
        <div
          class="col-lg-6 d-lg-flex align-items-center justify-content-end d-none"
        >
          <NuxtLink to="/blog" class="menu-anchor menu-anchor--mr odkaz">
            Blog
          </NuxtLink>
          <NuxtLink to="/#cenik" class="menu-anchor menu-anchor--mr odkaz">
            Ceník
          </NuxtLink>
          <NuxtLink to="/#kontakt" class="button--orange odkaz">
            Kontakt
          </NuxtLink>
        </div>
      </div>
    </div>
  </div>
</template>
