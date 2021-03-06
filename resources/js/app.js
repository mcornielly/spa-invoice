
/**
 * First we will load all of this project's JavaScript dependencies which
 * includes Vue and other libraries. It is a great starting point when
 * building robust, powerful web applications using Vue and Laravel.
 */

// require('./bootstrap');
// require('./router');


window.Vue = require('vue');

/**
 * The following block of code may be used to automatically register your
 * Vue components. It will recursively scan this directory for the Vue
 * components and automatically register them with their "basename".
 *
 * Eg. ./components/ExampleComponent.vue -> <example-component></example-component>
 */

// Vue.component('example-component', require('./components/ExampleComponent.vue'));
Vue.component('index-component', require('./components/IndexComponent.vue'));
Vue.component('app-component', require('./components/AppComponent.vue'));
Vue.component('form-component', require('./components/FormComponent.vue'));
Vue.component('show-component', require('./components/ShowComponent.vue'));
Vue.component('typeahead-component', require('./components/partials/TypeaHead.vue'));

// const files = require.context('./', true, /\.vue$/i)
// files.keys().map(key => Vue.component(key.split('/').pop().split('.')[0], files(key)))

/**
 * Next, we will create a fresh Vue application instance and attach it to
 * the page. Then, you may begin adding components to this application
 * or customize the JavaScript scaffolding to fit your unique needs.
 */

import AppComponent from './components/AppComponent'
import router from './router'
import bar from './components/progress'

router.beforeEach((to, from, next) => {
    bar.start()
    next()
})

Vue.filter('formatMoney', (value) => {
	return Number(value)
		.toFixed(2)
		.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$l",)
})

const app = new Vue({
    el: '#root',
    render: h => h(AppComponent),
    router
});
