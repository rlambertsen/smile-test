exports.ids = [1];
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

/***/ })

};;
//# sourceMappingURL=modal.js.map