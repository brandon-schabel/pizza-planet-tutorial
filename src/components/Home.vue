<template>
  <div class="row">
    <div id="home" class="col-sm-12 text-center">
      <div class="background">
        <h1>Welcome to Pizza Planet!</h1>
        <h2>Feeling hungry?</h2>
        <button class="btn btn-success" @click="goToMenu">Let's Order!</button>
      </div>
    </div>
  </div>
</template>
<style>
  #home {
    background: url('../assets/pizza.jpg');
    height: 800px;
    padding: 10%;
  }

  h1, h2 {
    margin: 6%;
  }

  .background {
    background-color: #eee;
    opacity: 0.8;
    max-width: 60%;
    margin: 0 auto;
    padding: 20px 0;
  }
</style>
<script>
export default {
  methods: {
    goToMenu() {
      // this.$router.go(1) when called tells browser to go forward(1) or back(-1) a page 
      // or you can use this.$router.replace('/menu') to reaplce the current url
      this.$router.push({name: 'menuLink'});
    }
  }
}
</script>

