Vue.component ('component-prop', {
    props: ['propname'],
    template: '<h1> {{message}} <br> {{propname}} </h1>',
    data() {
        return {
            message:'Hello from prop component',
        }
    },
});

var app = new Vue({
    el:'#app',
})