<template>
  <div class="card pokemon-card is-shadowless	" v-if="pokemon">
    <div class="card-image">
      <figure class="image is-4by3"
              :style="`background: url(${pokemon.sprites.other['official-artwork'].front_default}) center center / contain no-repeat, #E0E0E0;`"
      >
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4 is-capitalized">{{pokemon.name}}</p>
        </div>
      </div>

      <div class="content">
        <p>
          Abilities:
          <span class="is-capitalized" v-for="(item, index) in pokemon.abilities">
            {{item.ability.name}}<span v-if="index !== pokemon.abilities.length - 1">, </span>
          </span>
        </p>
        <p>
          Types:
          <span class="is-capitalized" v-for="(item, index) in pokemon.types">
            {{item.type.name}}<span v-if="index !== pokemon.types.length - 1">, </span>
          </span>
        </p>
        <p>
          HP: <span>{{pokemon.stats.filter((item) => {return item.stat.name.toLowerCase() === 'hp'})[0].base_stat}}</span>
        </p>
        <p>
          Attack: <span>{{pokemon.stats.filter((item) => {return item.stat.name.toLowerCase() === 'attack'})[0].base_stat}}</span>
        </p>
        <p>
          Defense: <span>{{pokemon.stats.filter((item) => {return item.stat.name.toLowerCase() === 'defense'})[0].base_stat}}</span>
        </p>
        <button class="button is-primary is-rounded is-outlined pokemon-btn mt-3" @click.prevent="openDialog">Learn More</button>
      </div>
    </div>

    <modal :toggle="toggle" @close="toggle = false" :data="pokemon"></modal>
  </div>
</template>

<script>
import modal from './modal'
export default {
  name: "pokemon-card",
  props: {
    name: {
      type: String,
      default: 'pikachu',
      required: false,
    }
  },
  components: {
    modal
  },
  data: () => ({
    pokemon: null,
    toggle: false,
  }),
  methods: {
    async getPokemon(name) {
      try{
        let response = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/'+ name)
        this.pokemon = response.data
      }
      catch(e) {
        throw e.error
      }
    },
    openDialog() {
      this.toggle = true
    },
  },
  created() {
    this.getPokemon(this.name).catch(e => console.error(e))
  }
}
</script>

<style lang="scss">

</style>