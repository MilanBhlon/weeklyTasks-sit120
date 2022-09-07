

var app = Vue.createApp({
    data() {
        return {
            name: 'David',
            inputValue: '',
            good: true,
            count: 0,
            number: [0,1,2,3,4,5,6],
            items: ['a', 'b', 'c', 'd', 'e'],
            places: [
                "Tasmania",
                "Melbourne",
                "Syndey"
            ],
            properties: [
               {id: 1, type: 'House', sold: true},
               {id: 2, type: 'Apartment', sold: true},
               {id: 3, type: 'Townhouse', sold: false},
            ],
            imgUrl: '',
        }
    },
    methods: {
        firstMethod() {
            alert('Button clicked!')
        },
    },
})
app.mount("#app5")



// const app = new Vue({
//     el: '#app5',
//     data: {
//         count: 0
//     }
// })

