import { createApp } from './app'
import { renderToNodeStream } from '@vue/server-renderer'
import type { OnBeforeRenderAsync } from 'vike/types'
import { render as abortRender, redirect } from 'vike/abort'
import type { App } from 'vue'
import type {
  // For code loaded in client and server
  PageContext,
  // For code loaded in client only
  PageContextClient,
  // For code loaded in server only
  PageContextServer
} from 'vike/types'

export const onBeforeRender: OnBeforeRenderAsync = async (pageContext:PageContext) => {

  const { app, store } = createApp(pageContext)
  const stream = renderToNodeStream(app)

  if (!pageContext.isClientSideNavigation && !pageContext.is404) {
  }

  const initialStoreState = store.state.value

  return {
    pageContext: {
      initialStoreState,
      stream,
      routeParams: pageContext.routeParams,
    },
  }
}