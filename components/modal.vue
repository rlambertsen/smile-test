<template>
  <div :class="['modal', toggle ? 'is-active' : '']">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title is-capitalized">{{data.name}}</p>
        <button class="delete" aria-label="close" @click="close"></button>
      </header>
      <section class="modal-card-body">
        <div class="fast-stats">
          <p><b>Fast Stats</b></p>
          <p>
            <b>Abilities:</b>
            <span class="is-capitalized" v-for="(item, index) in data.abilities">
            {{item.ability.name}}<span v-if="index !== data.abilities.length - 1">, </span>
          </span>
          </p>
          <p class="is-capitalized">
            <b>Types:</b>
            <span v-for="(item, index) in data.types">
              {{item.type.name}}<span v-if="index !== data.types.length - 1">, </span>
            </span>
          </p>
          <template v-for="item in data.stats">
            <p class="is-capitalized">
              <b>{{ item.stat.name }}</b>: {{ item.base_stat }}
            </p>
          </template>
        </div>
        <div class="other-imgs" v-for="(item) in data.sprites.other.home">
          <img :src="item" alt="" v-if="item">
        </div>
      </section>
      <footer class="modal-card-foot">
        <button class="button" @click="close">Close</button>
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "modal",
  props: {
    toggle: Boolean,
    data: {
      type: Object,
      default: () => {},
      required: true
    }
  },
  data: () => ({}),
  methods: {
    close() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>

</style>