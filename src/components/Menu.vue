<template>
  <div class="row">
    <div class="col-sm-12 col-md-6">
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Size</th>
            <th>Price</th>
            <th>Add to basket</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td><strong>{{ item.name }}</strong></td>
          </tr>
          <tr v-for="option in item.options">
            <td>{{ option.size }}</td>
            <td>{{ option.price }}</td>
            <td><button class="btn btn-sm btn-outline-success" 
                        type="button"
                        @click="addToBasket(item, option)">+</button></td> <!-- push info from current item to array as object -->
          </tr>
        </tbody>
      </table>
    </div>

    <!-- shopping basket -->
    <div class="col-sm-12 col-md-6">
      <div v-if="basket.length > 0"> 
        <table class="table">
          <thead class="thead-default">
            <tr>
              <th>Quantity</th>
              <th>Item</th>
              <th>Total</th>
            </tr>
          </thead>
          <tbody v-for="item in basket"> <!-- loop through each item in basket -->
            <tr>
              <td><button class="btn btn-sm" 
                          type="button"
                          @click="decreaseQuantity(item)">-</button>
                <span>{{ item.quantity }}-</span>
                <button class="btn btn-sm" 
                        type="button"
                        @click="increaseQuantity(item)">+</button></td>
              <td> {{ item.name }} {{ item.size }}"</td>
              <td>{{ item.price * item.quantity }}</td>
            </tr>
          </tbody>
        </table>
        <p>Order Total: </p>
        <button class="btn btn-success btn-block" @click="addNewOrder">Place Order</button>
      </div>
      <div v-else>
        <p>{{ basketText }}</p> {{ this.$store.state.orders }}
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      basket: [],
      basketText: 'Your basket is empty'
      
    };
  },
  computed: {
    ...mapGetters ([
      'getMenuItems'
    ])
    // getMenuItems () {
      // return this.$store.state.menuItems // this is used to access vuex state directly
      // return this.$store.getters.getMenuItems // use getter to get memnu item 
    //}
  },
  methods: {
    addToBasket(item, option) {
      this.basket.push({ // pushes an objectto basket array
        name: item.name,
        price: option.price,
        size: option.size,
        quantity: 1
      })
    },
    RemoveFromBasket(item) {
      // grabs index of item and remove from array
      this.basket.splice(this.basket.indexOf(item), 1);
    },
    increaseQuantity(item) {
      item.quantity++;
    },
    decreaseQuantity(item) {
      item.quantity--;

      if(item.quantity === 0) {
        this.RemoveFromBasket(item)
      }
    },
    addNewOrder() {
      this.$store.commit('addOrder', this.basket); // passes content off basket to addOrder mutation in state
      this.basket = []
      this.basketText = "Thank you, your order has been placed! :)"
    }
  }
};
</script>