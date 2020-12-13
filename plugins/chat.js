import Vue from 'vue'
import VueFbCustomerChat from 'vue-fb-customer-chat'

Vue.use(VueFbCustomerChat, {
  page_id: 101615038475279, //  change 'null' to your Facebook Page ID,
  theme_color: '#0A7CFF', // theme color in HEX
  locale: 'cs_CZ', // default 'en_US'
  logged_in_greeting: 'Dobrý den, mohu Vám pomoci?',
  logged_out_greeting: 'Dobrý den, mohu Vám pomoci?',
})
