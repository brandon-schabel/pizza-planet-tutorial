<template>
  <div class="row">
    <div>
      <div>
        <p v-if="!currentUser">Please login to continue</p>
        <p v-else>Logged in as: <br> {{ currentUser }}</p>
      </div>
      <form>
        <div class="form-group">
          <label>Email Address</label>
          <input type="email" class="form-control" id="email" placeholder="Enter email">
        </div>

        <div class="form-group">
          <label>Password</label>
          <input type="password" class="form-control" id="password" placeholder="Enter password">
        </div>

        <!-- @click.prevent prevents the default behavior of click on a button -->
        <button type="button" class="btn btn-primary" @click.prevent="signIn">Sign in</button>
        <button type="button" class="btn btn-danger" @click.prevent="signOut">Sign out</button>
      </form>
    </div>
  </div>
</template>

<script>
import Firebase from 'firebase'
import { store } from '../store/store.js'

Firebase.auth().onAuthStateChanged(function(user) {
  if(user) {
    store.dispatch('setUser', user) // if user exist, call "setUser" action in store, and pass in user
  } else {
    store.dispatch('setUser', null) // otherwise set to nothing
  }
})

export default {
  methods: {
    signIn() {
      // get sign in data and submit to firebase
      var email = document.getElementById('email').value;
      var password = document.getElementById('password').value

      Firebase.auth().signInWithEmailAndPassword(email, password).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;

        // check if user enter the wrong password, erroor is sent from firebase
        if(errorCode === 'auth/wrong-password') {
          alert('Wrong password')
        } else {
          alert(errorMessage)
        }
      })
    },

    signOut() {
      Firebase.auth().signOut().then(function() {
        alert('Logged out')
      }).catch(function(error) {
        alert('error')
      })
    }
  },

  computed: {
    currentUser() {
      return this.$store.getters.currentUser // get the current logged in user from the store
    }
  }
}
</script>

<style>
  form {
    margin: 20px 0;
  }
</style>