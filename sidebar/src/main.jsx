import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'


import { GraphQLClient, ClientContext } from 'graphql-hooks'
const API_TOKEN = '1e372eb4aa4f5d762c3b88f8271012'
const client = new GraphQLClient({

  url: "https://graphql.datocms.com/",
  headers: {
    "Authorization": `Bearer ${API_TOKEN}`,
    "X-Include-Drafts": "true",
  }
});


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClientContext.Provider value={client}>

      <App />
    </ClientContext.Provider>
  </React.StrictMode>,
)
