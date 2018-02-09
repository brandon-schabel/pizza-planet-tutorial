<template>
<header class="row">
  <nav class="navbar navbar-toggleable-md navbar-light">
    <a class="navbar-brand" href="/">PIZZA PLANET</a> 
    <ul class="navbar-nav">
      <!-- instead of wrapping the router-links in <li> use tag="li" to make the component a list item -->
      <router-link :to="{ name: 'homeLink' }" tag="li"><a class="nav-link">home</a></router-link>
      <router-link :to="{ name: 'menuLink' }" tag="li"><a class="nav-link">menu</a></router-link>
    </ul>
  </nav>
</header>
</template>

<script>
export default {
}
</script>

<style> 
  header {
    margin-bottom: 20px;
  }

  .navbar-brand {
    font-size: 1.5em;
  }
</style>