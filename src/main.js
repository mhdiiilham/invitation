import Vue from 'vue';
import App from './App.vue';
import VueQrcode from '@chenfengyuan/vue-qrcode';

Vue.component(VueQrcode.name, VueQrcode);

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
