import Vue from './node_modules/vue/dist/vue.js'
import hello from './components/Hello.vue'

new Vue({
    el: "#app",
    components: {
        hello: hello
    }
})