/* eslint-disable global-require */

import React from 'react'
import ReactDOM from 'react-dom'
import { hydrate } from 'emotion'
import { Provider } from 'react-redux'
import createHistory from 'history/createBrowserHistory'
import AppContainer from 'react-hot-loader/lib/AppContainer'
import configureStore from './configureStore'
import { ApolloClient } from 'apollo-client'
import { HttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'
import { ApolloProvider } from 'react-apollo'
import App from './components/App'

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://nrcanapi.cds-snc.ca/graphql' }),
  cache: new InMemoryCache(),
  ssrMode: true,
})
hydrate(window.EMOTION_HYDRATION_IDS)

const history = createHistory()
const { store } = configureStore(history, window.REDUX_STATE)

const render = App => {
  const root = document.getElementById('root')

  ReactDOM.hydrate(
    <ApolloProvider client={client}>
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>
    </ApolloProvider>,
    root,
  )
}

render(App)

if (module.hot && process.env.NODE_ENV === 'development') {
  module.hot.accept('./components/App', () => {
    const App = require('./components/App').default

    render(App)
  })
}
