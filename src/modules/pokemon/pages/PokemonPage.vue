<template>
  <h1>
    Unique Pokemon <span>#{{ pokemon_id }}</span>
    <div v-if="pokemon">
      <img :src="pokemon.sprites.front_default" :alt="pokemon.name">
    </div>
  </h1>
</template>

<script>
export default {
  props: {
    pokemon_id: {
      type    : Number,
      required: true,
    },
  },
  data() {
    return {
      // id: null,
      pokemon: null,
    };
  },
  created() {
    // const {pokemon_id} = this.$route.params;
    // console.log(pokemon_id);
    // this.id = pokemon_id;
    this.getPokemon();
  },
  methods: {
    async getPokemon() {
      try {
        const pokemon = await fetch(
          `https://pokeapi.co/api/v2/pokemon/${this.pokemon_id}`
        ).then((r) => r.json());
        console.log(pokemon);
        this.pokemon = pokemon;
      } catch (error) {
        this.$router.push('/');
        console.log('NO hay nada que hacer aqui');
      }
    },
  },
  watch: {
    pokemon_id(){
      this.getPokemon();
    }
  },
};
</script>

<style></style>
