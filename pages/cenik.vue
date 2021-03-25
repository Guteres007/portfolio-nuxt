<template>
  <div>
    <div class="container blog">
      <div class="row">
        <div class="col-12">
          <div class="price-table">
            <table class="comparison-table">
              <thead>
                <tr class="product-tile-row">
                  <th class="product-feature"></th>
                  <th class="product product--radius">Jednoduchý web</th>
                  <th class="product product__action">Standardní web</th>
                  <th class="product">Premium web</th>
                </tr>
                <tr>
                  <th class="price-info-feature">
                    <div>Cena od</div>
                  </th>
                  <th class="price-info1">
                    <div class="price-now">
                      <span>9 999,-</span>
                    </div>
                  </th>
                  <th class="price-info2">
                    <div class="price-now">
                      <span>24 999,-</span>
                    </div>
                  </th>
                  <th class="price-info3">
                    <div class="price-now">
                      <span>44 999,-</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td colspan="3">Počet stránek</td>
                </tr>
                <tr class="compare-row">
                  <td>Počet stránek</td>
                  <td>
                    <span>1 - 2</span>
                  </td>
                  <td>
                    <span>3 - 10</span>
                  </td>
                  <td>
                    <span>10+</span>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">Design na míru</td>
                </tr>
                <tr>
                  <td>Design na míru</td>
                  <td>
                    <i class="fa fa-times"></i>
                  </td>
                  <td>
                    <i class="fa fa-times"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">Programování na míru</td>
                </tr>
                <tr class="compare-row">
                  <td>Programování na míru</td>
                  <td>
                    <i class="fa fa-times"></i>
                  </td>
                  <td>
                    <i class="fa fa-times"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">Redakční systém</td>
                </tr>
                <tr class="compare-row">
                  <td>Redakční systém</td>
                  <td>
                    <i class="fa fa-times"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">SEO</td>
                </tr>
                <tr>
                  <td>SEO</td>
                  <td>
                    <i class="fa fa-times"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                </tr>

                <tr>
                  <td></td>
                  <td colspan="3">Hosting</td>
                </tr>
                <tr>
                  <td>Hosting</td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">Doména</td>
                </tr>
                <tr class="compare-row">
                  <td>Doména</td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">Responzivní web</td>
                </tr>
                <tr>
                  <td>Responzivní web</td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                  <td colspan="3">Napojení soc. sítě</td>
                </tr>
                <tr class="compare-row">
                  <td>Napojení soc. sítě</td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                  <td>
                    <i class="fa fa-check"></i>
                  </td>
                </tr>
                <tr>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td>
                    <NuxtLink to="/#kontakt" class="get-started-btn"
                      >Chci toto řešení</NuxtLink
                    >
                  </td>
                  <td>
                    <NuxtLink to="/#kontakt" class="get-started-btn"
                      >Chci toto řešení</NuxtLink
                    >
                  </td>
                  <td>
                    <NuxtLink to="/#kontakt" class="get-started-btn"
                      >Chci toto řešení</NuxtLink
                    >
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div>Konzultace</div>
      </div>
    </div>
  </div>
</template>

<script>
import { head } from '../utils/metatags'
export default {
  layout: 'blog',
  methods: {},
  head,
}
</script>
<style lang="scss">
@import '~/assets/scss/price.scss';
</style>
