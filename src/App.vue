<template>
  <div id="app">
    <div class="container">
      <pp-header></pp-header>
    </div>
    
    <div class="container">
      <!-- router-view handles the current route and displays a component depending on the url -->
      <router-view></router-view>
    </div>

    <div class="container">
      <div class="row">
        <div class="col-sm-12 col-md-4">
          <router-view name="ordering-guide"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="delivery"></router-view>
        </div>
        <div class="col-sm-12 col-md-4">
          <router-view name="history"></router-view>
        </div>
      </div>
    </div>

    <div class="container">
      <pp-footer></pp-footer>
    </div>
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import { dbMenuRef, dbOrdersRef } from './firebaseConfig';

export default {
  components: {
    ppHeader: Header,
    ppFooter: Footer
  },
  created () {
    this.$store.dispatch('setMenuRef', dbMenuRef) // will bind our store to firebase, calls setMenuRef action in the menu store
    this.$store.dispatch('setOrdersRef', dbOrdersRef)
  }
};
</script>

<style>

</style>
