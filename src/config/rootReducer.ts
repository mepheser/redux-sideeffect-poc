/* tslint:disable:no-console */
import { combineReducers } from 'redux';
import scores from '../app/store/reducer'

const rootReducer = combineReducers({
    scores
})

export default rootReducer
