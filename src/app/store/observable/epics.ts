/* tslint:disable:no-console */
import { combineEpics } from 'redux-observable';
import 'rxjs';
import { Observable } from 'rxjs/Observable';
import { loadScoresWithObservable } from '../../service/score-service';
import IScore from '../../types/Score';
import { ILoadErrorAction, ScoreActionKeys } from '../../types/ScoreActions';

const loadScores$ = (action$: any) =>
    action$
        .ofType(ScoreActionKeys.LOAD_PENDING_WITH_EPIC)
        .switchMap(() => loadScoresWithObservable()
            .map((result: IScore[]) => ({type: ScoreActionKeys.LOAD_SUCCESS, payload: result}))
            .catch((error: string) => Observable.of({type: ScoreActionKeys.LOAD_ERROR, payload: error}))  // error needs to create a new observable
        )

const pollScores$ = (action$: any) =>
    action$.ofType(ScoreActionKeys.START_POLLING_WITH_EPIC)
        .switchMap(() => Observable.timer(0, 6000)
            .takeUntil(action$.ofType(ScoreActionKeys.STOP_POLLING))
            .map(() => ({type: ScoreActionKeys.LOAD_PENDING_WITH_EPIC}))
        )

const logError$ = (action$: any) =>
    action$
        .ofType(ScoreActionKeys.LOAD_ERROR)
        .do((action: ILoadErrorAction) => console.log('Error happend!', action.payload))
        .ignoreElements()  // comment out to see stack overflow

export default combineEpics(loadScores$, pollScores$, logError$);
