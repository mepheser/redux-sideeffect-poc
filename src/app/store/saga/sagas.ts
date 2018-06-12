import { call, put, takeEvery } from 'redux-saga/effects';
import { loadScores } from '../../service/score-service';
import IScore from '../../types/Score';
import { ScoreActionKeys } from '../../types/ScoreActions';

export function* watchScorePending() {
    yield takeEvery(ScoreActionKeys.LOAD_PENDING_WITH_SAGA, loadScorePending)
}

function* loadScorePending(): any {
    try {
        const result: IScore[] = yield call(loadScores);
        yield put({type: ScoreActionKeys.LOAD_SUCCESS, payload: result});
    } catch(error) {
        yield put({type: ScoreActionKeys.LOAD_SUCCESS, payload: error});
    }
}
