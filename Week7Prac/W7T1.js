//local registration
let ComponentC = {
    template: '<p>{{message}}</p>',
    data() {
        return {
            message: 'local registration'
        }
    }
}

Vue.component('component-a', {
    data() {
        return {
            message: 'component without a template',
        }
        
    }
})

//global registration
Vue.component('component-b', {
    template: '<h1>{{message}}</h1>',
    data() {
        return {
            message: 'global registration',
        }
        
    }
})


var app = new Vue({
    el:'#app',
    data: {
        message: 'Hello Vue!',
        
    },
    components: {
        'component-c': ComponentC //local registration
    }
})

