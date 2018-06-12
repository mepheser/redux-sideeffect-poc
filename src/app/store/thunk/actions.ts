import { loadScores } from '../../service/score-service';
import { ScoreActionKeys } from '../../types/ScoreActions';

export const loadWithThunk = () =>
    (dispatch: any) => {
        loadScores()
            .then((result) => {
                dispatch({type: ScoreActionKeys.LOAD_SUCCESS, payload: result})
            })
            .catch((error) => {
                dispatch({type: ScoreActionKeys.LOAD_ERROR, payload: error})
            })

        dispatch({type: ScoreActionKeys.LOAD_PENDING})
    }
