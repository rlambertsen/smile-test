exports.ids = [3,1,2];
exports.modules = {

/***/ 26:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal.vue?vue&type=template&id=00f54755&scoped=true&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    class: ['modal', _vm.toggle ? 'is-active' : '']
  }, [_vm._ssrNode("<div class=\"modal-background\" data-v-00f54755></div> <div class=\"modal-card\" data-v-00f54755><header class=\"modal-card-head\" data-v-00f54755><p class=\"modal-card-title is-capitalized\" data-v-00f54755>" + _vm._ssrEscape(_vm._s(_vm.data.name)) + "</p> <button aria-label=\"close\" class=\"delete\" data-v-00f54755></button></header> <section class=\"modal-card-body\" data-v-00f54755><div class=\"fast-stats\" data-v-00f54755><p data-v-00f54755><b data-v-00f54755>Fast Stats</b></p> <p data-v-00f54755><b data-v-00f54755>Abilities:</b> " + _vm._ssrList(_vm.data.abilities, function (item, index) {
    return "<span class=\"is-capitalized\" data-v-00f54755>" + _vm._ssrEscape("\n          " + _vm._s(item.ability.name)) + (index !== _vm.data.abilities.length - 1 ? "<span data-v-00f54755>, </span>" : "<!---->") + "</span>";
  }) + "</p> <p class=\"is-capitalized\" data-v-00f54755><b data-v-00f54755>Types:</b> " + _vm._ssrList(_vm.data.types, function (item, index) {
    return "<span data-v-00f54755>" + _vm._ssrEscape("\n            " + _vm._s(item.type.name)) + (index !== _vm.data.types.length - 1 ? "<span data-v-00f54755>, </span>" : "<!---->") + "</span>";
  }) + "</p> " + _vm._ssrList(_vm.data.stats, function (item) {
    return "<p class=\"is-capitalized\" data-v-00f54755><b data-v-00f54755>" + _vm._ssrEscape(_vm._s(item.stat.name)) + "</b>" + _vm._ssrEscape(": " + _vm._s(item.base_stat) + "\n          ") + "</p>";
  }) + "</div> " + _vm._ssrList(_vm.data.sprites.other.home, function (item) {
    return "<div class=\"other-imgs\" data-v-00f54755>" + (item ? "<img" + _vm._ssrAttr("src", item) + " alt data-v-00f54755>" : "<!---->") + "</div>";
  }) + "</section> <footer class=\"modal-card-foot\" data-v-00f54755><button class=\"button\" data-v-00f54755>Close</button></footer></div>")]);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/modal.vue?vue&type=template&id=00f54755&scoped=true&

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/modal.vue?vue&type=script&lang=js&
/* harmony default export */ var modalvue_type_script_lang_js_ = ({
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
      this.$emit('close');
    }

  }
});
// CONCATENATED MODULE: ./components/modal.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_modalvue_type_script_lang_js_ = (modalvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/modal.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_modalvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "00f54755",
  "15b881b8"
  
)

/* harmony default export */ var modal = __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 27:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pokemon-card.vue?vue&type=template&id=218ac4c5&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm.pokemon ? _c('div', {
    staticClass: "card pokemon-card is-shadowless"
  }, [_vm._ssrNode("<div class=\"card-image\"><figure class=\"image is-4by3\"" + _vm._ssrStyle(null, `background: url(${_vm.pokemon.sprites.other['official-artwork'].front_default}) center center / contain no-repeat, #E0E0E0;`, null) + "></figure></div> <div class=\"card-content\"><div class=\"media\"><div class=\"media-content\"><p class=\"title is-4 is-capitalized\">" + _vm._ssrEscape(_vm._s(_vm.pokemon.name)) + "</p></div></div> <div class=\"content\"><p>\n        Abilities:\n        " + _vm._ssrList(_vm.pokemon.abilities, function (item, index) {
    return "<span class=\"is-capitalized\">" + _vm._ssrEscape("\n          " + _vm._s(item.ability.name)) + (index !== _vm.pokemon.abilities.length - 1 ? "<span>, </span>" : "<!---->") + "</span>";
  }) + "</p> <p>\n        Types:\n        " + _vm._ssrList(_vm.pokemon.types, function (item, index) {
    return "<span class=\"is-capitalized\">" + _vm._ssrEscape("\n          " + _vm._s(item.type.name)) + (index !== _vm.pokemon.types.length - 1 ? "<span>, </span>" : "<!---->") + "</span>";
  }) + "</p> <p>\n        HP: <span>" + _vm._ssrEscape(_vm._s(_vm.pokemon.stats.filter(item => {
    return item.stat.name.toLowerCase() === 'hp';
  })[0].base_stat)) + "</span></p> <p>\n        Attack: <span>" + _vm._ssrEscape(_vm._s(_vm.pokemon.stats.filter(item => {
    return item.stat.name.toLowerCase() === 'attack';
  })[0].base_stat)) + "</span></p> <p>\n        Defense: <span>" + _vm._ssrEscape(_vm._s(_vm.pokemon.stats.filter(item => {
    return item.stat.name.toLowerCase() === 'defense';
  })[0].base_stat)) + "</span></p> <button class=\"button is-primary is-rounded is-outlined pokemon-btn mt-3\">Learn More</button></div></div> "), _c('modal', {
    attrs: {
      "toggle": _vm.toggle,
      "data": _vm.pokemon
    },
    on: {
      "close": function ($event) {
        _vm.toggle = false;
      }
    }
  })], 2) : _vm._e();
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./components/pokemon-card.vue?vue&type=template&id=218ac4c5&

// EXTERNAL MODULE: ./components/modal.vue + 4 modules
var modal = __webpack_require__(26);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./components/pokemon-card.vue?vue&type=script&lang=js&

/* harmony default export */ var pokemon_cardvue_type_script_lang_js_ = ({
  name: "pokemon-card",
  props: {
    name: {
      type: String,
      default: 'pikachu',
      required: false
    }
  },
  components: {
    modal: modal["default"]
  },
  data: () => ({
    pokemon: null,
    toggle: false
  }),
  methods: {
    async getPokemon(name) {
      try {
        let response = await this.$axios.get('https://pokeapi.co/api/v2/pokemon/' + name);
        this.pokemon = response.data;
      } catch (e) {
        throw e.error;
      }
    },

    openDialog() {
      this.toggle = true;
    }

  },

  created() {
    this.getPokemon(this.name).catch(e => console.error(e));
  }

});
// CONCATENATED MODULE: ./components/pokemon-card.vue?vue&type=script&lang=js&
 /* harmony default export */ var components_pokemon_cardvue_type_script_lang_js_ = (pokemon_cardvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./components/pokemon-card.vue



function injectStyles (context) {
  
  
}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  components_pokemon_cardvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  injectStyles,
  null,
  "873ce1e2"
  
)

/* harmony default export */ var pokemon_card = __webpack_exports__["default"] = (component.exports);

/* nuxt-component-imports */
installComponents(component, {Modal: __webpack_require__(26).default})


/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=50fb7f36&
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c('div', {
    staticClass: "pt-6 has-text-black"
  }, [_vm._ssrNode("<div class=\"columns\"><div class=\"column\"><h5 class=\"has-text-weight-bold\">POKEMON CARDS</h5> <h3 class=\"is-size-1 has-text-weight-bold\">Gotta catch 'em all</h3></div></div> "), _vm._ssrNode("<div class=\"columns mt-5 pb-6\">", "</div>", [_vm._ssrNode("<div class=\"column is-one-third-tablet is-one-third-desktop is-one-third-fullhd\">", "</div>", [_c('pokemonCard', {
    attrs: {
      "name": "charmander"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"column is-one-third-tablet is-one-third-desktop is-one-third-fullhd\">", "</div>", [_c('pokemonCard', {
    attrs: {
      "name": "bulbasaur"
    }
  })], 1), _vm._ssrNode(" "), _vm._ssrNode("<div class=\"column is-one-third-tablet is-one-third-desktop is-one-third-fullhd\">", "</div>", [_c('pokemonCard', {
    attrs: {
      "name": "squirtle"
    }
  })], 1)], 2)], 2);
};

var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=50fb7f36&

// EXTERNAL MODULE: ./components/pokemon-card.vue + 4 modules
var pokemon_card = __webpack_require__(27);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js&

/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js_ = ({
  components: {
    pokemonCard: pokemon_card["default"]
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js&
 /* harmony default export */ var pagesvue_type_script_lang_js_ = (lib_vue_loader_options_pagesvue_type_script_lang_js_); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue





/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js_,
  render,
  staticRenderFns,
  false,
  null,
  null,
  "717a67b3"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map