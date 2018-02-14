<template>
  <div>
  <div class="row">
    <!-- col-sm-12 will make component fill full width on phones, whereas on a tablet or desktop col-md-6 will only take up half -->
    <div class="col-sm-12 col-md-6">
      <!-- new pizza component -->
      <pp-new-pizza></pp-new-pizza>
    </div>
    <div class="col-sm-12 col-md-6">
      <h3>Menu:</h3>
      <table class="table table-hover">
        <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Remove from menu</th>
          </tr>
        </thead>
        <tbody v-for="item in getMenuItems">
          <tr>
            <td>{{item.name}}</td>
            <td><button class="btn btn-outline-danger btn-sm">x</button></td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>

  <div class="row">
    <div class="col-sm-12">
    <h3>Current orders: {{ numberOfOrders }}</h3>
        
    <table class="table table-sm" v-for="orders in getOrders">
        <thead class="thead-default">
          <tr>
            <th>Item</th>
            <th>Size</th>
            <th>Quantity</th>
            <th>Price</th>
          </tr>
        </thead>

        <tbody>
          <div class="order-number">
            <strong><em>Order Number: 1</em></strong>
            <td><button class="btn btn-outline-danger btn-sm">x</button></td>
          </div>
          <tr v-for="orderItems in orders['.value']">
            <td>{{ orderItems.name }}</td>
            <td>{{ orderItems.size }}</td>
            <td>{{ orderItems.quantity }}</td>
            <td>{{ orderItems.price }}</td>
          </tr>
        </tbody>

      </table>
      </div>
  </div>
  <hr>
  <div class="row">
    <div class="col-sm-12 col-lg-6">
      <pp-login></pp-login>
    </div>
  </div>
</div>
</template>

<script>
import Login from "./Login"
import NewPizza from "./NewPizza"
import { mapGetters } from 'vuex'

export default {
  components: {
    ppNewPizza: NewPizza,
    ppLogin: Login
  },
  computed: {
    ...mapGetters ([
      'numberOfOrders',
      'getMenuItems',
      'getOrders'
    ])
    // getMenuItems () {
    //   return this.$store.state.menuItems
    // },
    // numberOfOrders() {
    //   return this.$store.getters.numberOfOrders
    // }
  },
  beforeRouteLeave: (to, from, next) => {
    if(confirm("Have you remembered to log out?") == true) {
      next();
    } else {
      next(false);
    }
  }
}

/*
data() {
  return {
    name: 'chris'
  }
},
beforeRouteEnter: (to, from, next) => {
  //alert('Hi ' + this.name), // returns "Hi undefined"
  next( vm => { // vm(vue model) gives access to vue instance
    alert('Hi ' + vm.name) // returns "Hi chris" as expected
  })
*/
</script>
