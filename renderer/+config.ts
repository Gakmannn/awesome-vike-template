import type { Config } from 'vike/types'

// https://vike.dev/config
export default {
  // https://vike.dev/clientRouting
  clientRouting: true,
  // https://vike.dev/onBeforeRender#advanced-example
  passToClient: ['initialStoreState', 'routeParams', 'isClientSideNavigation'],
  // https://vike.dev/meta
  meta: {
    // Define new setting 'title'
    title: {
      env: { server: true, client: true }
    },
    // Define new setting 'description'
    description: {
      env: { server: true }
    },
    onBeforeRender: {
      // Modify the onBeforeRender() hook to run on both the server- and client-side
      env: { server: true }
    },
  },
  hydrationCanBeAborted: true
} satisfies Config
