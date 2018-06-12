import { applyMiddleware, compose, Middleware } from 'redux';

const w: any = window as any;
const composeEnhancers = (process.env.NODE_ENV === 'development' &&
    w && w.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose

export default (middlewares: Middleware[]) => composeEnhancers(applyMiddleware(...middlewares))
