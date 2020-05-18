

Vue.component('product',{
    props: {
        name:{
            type: String,
            required: true
        },
        stockcount:{
            type: String,
            required: true,
        }, cartcount:{
            type: Number,
            required: true,
            default: 0
        },
    },
    template: `<div>
                    <p v-if="CountInStock<=10">Limited seating left</p><p v-if="CountInStock<=10">Limited seating left</p>
                    <p>Investor Seminar: {{ name }}</p><p :style="style1">Seats Available: {{ countInStock }}</p> <p>Seats Reserved: {{countInCart}}</p>
                    <button  :class="{disabledButton: !inStock}" v-on:click="addToCart" :disabled="!inStock">+</button> Reserve Another Seat <br>
                    <button :class="{disabledButton: !anyInCart}" v-on:click="removeFromCart" :disabled="!anyInCart">-</button>Remove Seat From Reservation<br><br><br><br>
               </div>
    `,
    data() {
        return {
            productName: this.name,
            countInStock: this.stockcount,
            countInCart: this.cartcount,
            inStock: true,
            anyInCart: false,
            style1: {
                color: 'blue'
            }
        }
    },
    methods: {
        addToCart: function () {
                this.$emit('addtocart')
                this.countInCart++;
                this.countInStock--;
                if(this.countInStock==0){
                    this.inStock = false
                    alert("You just got the last seat.")
                    this.style1.color = 'red'
                }
            if(this.countInCart>0){
                this.anyInCart=true
            }
        },
        removeFromCart: function () {
            this.$emit('removefromcart')
            if(this.countInCart==0){
                return
            }
            this.countInCart--;
            this.countInStock++;
            if(this.countInStock>0){
                this.inStock = true
                this.style1.color = 'blue'
            }
            if(this.countInCart==0){
                this.anyInCart=false
            }
        },
        totalCartAdd: function() {
            count++
        },
        totalCartRemove: function () {
            count--
}
    }
})



var app = new Vue({
    el: '#app',
   component: [
       'product'
   ],
    data: {
        totalCart: 0
    },
    methods: {
         totalCartAdd: function() {
            this.totalCart++;
        },
        totalCartRemove: function () {
            this.totalCart--;
        }
    },
    computed: {
        title() {
            return this.totalCart + ' ' + this.product
        },
    }
})