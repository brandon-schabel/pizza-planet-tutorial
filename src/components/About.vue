<template>
  <div>
    <p>Click on links below for more info: </p>
    <nav class="navbar navbar-toggleable-md navbar-light">
      <ul class="navbar-nav">
        <!-- instead of wrapping the router-links in <li> use tag="li" to make the component a list item -->
        <router-link :to="{ name: 'historyLink' }" tag="li"><a class="nav-link">our history</a></router-link>
        <router-link :to="{ name: 'contactLink' }" tag="li"><a class="nav-link">contact us</a></router-link>
        <router-link :to="{ name: 'orderingGuideLink' }" tag="li"><a class="nav-link">ordering guide</a></router-link>
        <router-link :to="{ name: 'deliveryLink' }" tag="li"><a class="nav-link">delivery</a></router-link>
      </ul>
    </nav>

    <!-- router-view will display selected route that is defined as the child route under /about in main.js -->
    <router-view></router-view>
  </div>
</template>

<script>
</script>