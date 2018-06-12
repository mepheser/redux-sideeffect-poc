/* tslint:disable:no-console */
import { createStore } from 'redux';
import createSagaMiddleware from 'redux-saga'
import thunk from 'redux-thunk';
import { watchScorePending } from '../app/store/saga/sagas';
import createEnhancers from './createEnhancers';
import createEpicMiddleware from './createEpicMiddleware';
import createPromiseMiddleware from './createPromiseMiddleware';
import rootReducers from './rootReducer'

const sagaMiddleware = createSagaMiddleware()

const middlewares = [thunk, sagaMiddleware, createEpicMiddleware(), createPromiseMiddleware()]

const createReduxStore = () => {
    const store = createStore(
        rootReducers,
        {},
        createEnhancers(middlewares)
    )

    sagaMiddleware.run(watchScorePending)

    return store
}


export default createReduxStore
