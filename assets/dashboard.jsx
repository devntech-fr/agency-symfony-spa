import 'react-app-polyfill/stable'
import React from 'react'
import DashboardApp from './core-ui/DashboardApp'
import { Provider } from 'react-redux'
import store from './core-ui/store'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('core-ui')
const root = createRoot(container)

root.render(
    <Provider store={store}>
        <DashboardApp />
    </Provider>
);
