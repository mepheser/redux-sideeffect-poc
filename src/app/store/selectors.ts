import { createSelector } from 'reselect';
import IAppState from '../types/AppState';
import IScoreState from '../types/ScoreState';

const selectScoreState = ((root: IAppState) => root.scores);

export const selectScoresAreLoading = createSelector(selectScoreState, (scoreState: IScoreState) => scoreState.isLoading)
export const selectScoresResult = createSelector(selectScoreState, (scoreState: IScoreState) => scoreState.result)
export const selectScoresError = createSelector(selectScoreState, (scoreState: IScoreState) => scoreState.error)
