import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import App from './app/components/App';
import createReduxStore from './config/createReduxStore';
import './index.css';
import registerServiceWorker from './registerServiceWorker';

const store = createReduxStore()

const root = (
    <Provider store={store}>
        <App />
    </Provider>
)

ReactDOM.render(
    root,
    document.getElementById('root') as HTMLElement
);
registerServiceWorker();
