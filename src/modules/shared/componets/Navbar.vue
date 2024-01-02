<template>
  <div>
    <!-- <router-link :to="{name: 'home' }">Pokemon List</router-link>
    <router-link :to="{name: 'pokemon_id', params: { pokemon_id: 85} }">Pokemon por ID</router-link>
    <router-link :to="{name: 'about' }">About</router-link> -->
    <CustomLink
      v-for="link in links"
      :key="link.to"
      :link="link"
    />
  </div>
</template>

<script>
import { defineAsyncComponent } from 'vue';

export default {
  data() {
    return {
      links: [
        {to: '/home', name: 'Pokemons'},
        {to: '/pokemonid/50', name: 'Por ID'},
        {to: '/about', name: 'About'},
        {to: 'https://www.google.com', name: 'Google'},
      ]
    }
  },
  components: {
    CustomLink: defineAsyncComponent(() => import('@/modules/shared/componets/CustomLink.vue'))
  }
}
</script>

<style scoped>

div {
    padding: 0 30px;
}

div a {
    color      : #2c3e50;
    font-weight: bold;
    margin     : 0 10px;
}

/*
.router-link-active{
    color: #42b983;
}

*/
</style>