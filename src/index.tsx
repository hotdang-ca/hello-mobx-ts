import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'mobx-react';

import './index.css';
import App from './App';
import { AppState } from './stores/AppState';

const stores = {
    appState: new AppState(),
};

const renderApp = (Component: any): void => {
    ReactDOM.render(
        <Provider {...stores}>
            <Component />
        </Provider>,
        document.getElementById('root')
    );
};

renderApp(App);
