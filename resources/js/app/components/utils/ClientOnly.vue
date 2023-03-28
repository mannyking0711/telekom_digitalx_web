<!--/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//
//    https://github.com/egoist/vue-client-only/blob/master/src/index.js
//
//    Usage example:
//    <client-only placeholder="Loading...">
//      <p>Only rendered client side</p>
//    </client-only>
//
//    By default the placeholder will be wrapped in a div tag, however you can use placeholderTag prop to customize it:
//    <client-only placeholder="Loading..." placeholder-tag="p">
//      Only rendered client side
//    </client-only>
//
//
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////-->
<script>
export default {
  name: 'ClientOnly',
  functional: true,
  props: {
    placeholder: String,
    placeholderTag: {
      type: String,
      default: 'div'
    }
  },
  render(h, { parent, slots, props }) {
    const { default: defaultSlot = [], placeholder: placeholderSlot } = slots()

    if (parent._isMounted) {
      return defaultSlot
    }

    parent.$once('hook:mounted', () => {
      parent.$forceUpdate()
    })

    if (props.placeholderTag && (props.placeholder || placeholderSlot)) {
      return h(
        props.placeholderTag,
        {
          class: ['client-only-placeholder']
        },
        props.placeholder || placeholderSlot
      )
    }

    // Return a placeholder element for each child in the default slot
    // Or if no children return a single placeholder
    return defaultSlot.length > 0 ? defaultSlot.map(() => h(false)) : h(false)
  }
}
</script>
