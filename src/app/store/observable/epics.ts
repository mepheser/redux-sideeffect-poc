import { combineEpics } from 'redux-observable';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { loadScoresWithObservable } from '../../service/score-service';
import IScore from '../../types/Score';
import { ScoreActionKeys } from '../../types/ScoreActions';

const loadScores$ = (action$: any) =>
    action$
        .ofType(ScoreActionKeys.LOAD_PENDING_WITH_EPIC)
        .switchMap(() => loadScoresWithObservable()
            .map((result: IScore[]) => ({type: ScoreActionKeys.LOAD_SUCCESS, payload: result}))
            .catch((error: string) => Observable.of({type: ScoreActionKeys.LOAD_ERROR, payload: error}))
        )

export default combineEpics(loadScores$);
