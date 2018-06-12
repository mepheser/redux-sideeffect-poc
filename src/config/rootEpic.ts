import { combineEpics } from 'redux-observable';
import epics from '../app/store/observable/epics';

export default combineEpics(epics);
