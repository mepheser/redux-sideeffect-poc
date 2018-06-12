import { ScoreActionKeys, ScoreActionTypes } from '../types/ScoreActions';
import IScoreState from '../types/ScoreState';

const initialState: IScoreState = {
    error: undefined,
    isLoading: false,
    result: [],
};

export default function scores(state = initialState, action: ScoreActionTypes) {
    switch (action.type) {
        case ScoreActionKeys.LOAD_PENDING:
            return {
                ...state,
                error: undefined,
                isLoading: true,
                result: [],
            }

        case ScoreActionKeys.LOAD_PENDING_WITH_EPIC:
            return {
                ...state,
                error: undefined,
                isLoading: true,
                result: [],
            }

        case ScoreActionKeys.LOAD_PENDING_WITH_SAGA:
            return {
                ...state,
                error: undefined,
                isLoading: true,
                result: [],
            }

        case ScoreActionKeys.LOAD_SUCCESS:
            return {
                ...state,
                error: undefined,
                isLoading: false,
                result: action.payload,
            }

        case ScoreActionKeys.LOAD_ERROR:
            return {
                ...state,
                error: action.payload,
                isLoading: false,
                result: [],
            }

        default:
            return state
    }
}
