// Vue.component ('new-div', {
//     props: ['todo'],
//     template: '<li>{{todo.text}}</li>',
// });



// const app = new Vue({
//     el: '#app1',
//     data: {
//         message: 'my first vue app!',
//         check: true,
//         todos: [
//             {text: 'Weekly tasks'},
//             {text: 'Project proposal'},
//             {text: 'Project implementation'},
//         ],

//     }
// })

var app = new Vue({
    el:'#app',
    data: {
        message: 'hello vue',
    },
});

var app2 = new Vue({
    el:'#app2',
    data: {
        message: 'You lodated this page on ' + new Date().toLocaleString()
    },
});

var app3 = new Vue({
    el:'#app-3',
    data: {
        seen: true,
    },
});

var app4 = new Vue({
    el: '#app-4',
    data: {
        todos: [
            {text: 'Learn JS'},
            {text: 'Learn Vue'},
            {text: 'Build Something'},
        ],
    },
});