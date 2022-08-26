<template>
  <div class="pt-6 has-text-black">
    <div class="columns">
      <div class="column">
        <h5 class="has-text-weight-bold">POKEMON CARDS</h5>
        <h3 class="is-size-1 has-text-weight-bold">Gotta catch 'em all</h3>
      </div>
    </div>
    <div class="columns mt-5 pb-6">
      <div class="column is-one-third-tablet is-one-third-desktop is-one-third-fullhd">
        <pokemonCard name="charmander"></pokemonCard>
      </div>
      <div class="column is-one-third-tablet is-one-third-desktop is-one-third-fullhd">
        <pokemonCard name="bulbasaur"></pokemonCard>
      </div>
      <div class="column is-one-third-tablet is-one-third-desktop is-one-third-fullhd">
        <pokemonCard name="squirtle"></pokemonCard>
      </div>
    </div>
  </div>
</template>

<script>
import pokemonCard from '~/components/pokemon-card'
export default {
  components: {
    pokemonCard
  },
}
</script>
