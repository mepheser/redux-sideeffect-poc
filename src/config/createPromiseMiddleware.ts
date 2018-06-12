import promiseMiddleware from 'redux-promise-middleware';

export default () => promiseMiddleware({
    promiseTypeSuffixes: ['PENDING', 'SUCCESS', 'ERROR']
})
