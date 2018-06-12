import { createEpicMiddleware } from 'redux-observable';
import rootEpic from './rootEpic';

export default () => createEpicMiddleware(rootEpic);
