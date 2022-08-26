export const Modal = () => import('../../components/modal.vue' /* webpackChunkName: "components/modal" */).then(c => wrapFunctional(c.default || c))
export const PokemonCard = () => import('../../components/pokemon-card.vue' /* webpackChunkName: "components/pokemon-card" */).then(c => wrapFunctional(c.default || c))
export const SiteFooter = () => import('../../components/site-footer.vue' /* webpackChunkName: "components/site-footer" */).then(c => wrapFunctional(c.default || c))
export const SiteNavbar = () => import('../../components/site-navbar.vue' /* webpackChunkName: "components/site-navbar" */).then(c => wrapFunctional(c.default || c))

// nuxt/nuxt.js#8607
function wrapFunctional(options) {
  if (!options || !options.functional) {
    return options
  }

  const propKeys = Array.isArray(options.props) ? options.props : Object.keys(options.props || {})

  return {
    render(h) {
      const attrs = {}
      const props = {}

      for (const key in this.$attrs) {
        if (propKeys.includes(key)) {
          props[key] = this.$attrs[key]
        } else {
          attrs[key] = this.$attrs[key]
        }
      }

      return h(options, {
        on: this.$listeners,
        attrs,
        props,
        scopedSlots: this.$scopedSlots,
      }, this.$slots.default)
    }
  }
}
