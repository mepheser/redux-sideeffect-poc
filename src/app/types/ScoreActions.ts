import IScore from './Score';

export enum ScoreActionKeys {
    LOAD_PENDING = "LOAD_PENDING",
    LOAD_PENDING_WITH_SAGA = "LOAD_PENDING_WITH_SAGA",
    LOAD_PENDING_WITH_EPIC = "LOAD_PENDING_WITH_EPIC",
    LOAD_SUCCESS = "LOAD_SUCCESS",
    LOAD_ERROR = "LOAD_ERROR",
}

export interface ILoadPendingAction {
    type: ScoreActionKeys.LOAD_PENDING;
}

export interface ILoadPendingSagaAction {
    type: ScoreActionKeys.LOAD_PENDING_WITH_SAGA;
}

export interface ILoadPendingEpicAction {
    type: ScoreActionKeys.LOAD_PENDING_WITH_EPIC;
}

export interface ILoadSuccessAction {
    type: ScoreActionKeys.LOAD_SUCCESS;
    payload: IScore[];
}

export interface ILoadErrorAction {
    type: ScoreActionKeys.LOAD_ERROR;
    payload: string;
}

export type ScoreActionTypes =
    | ILoadPendingAction
    | ILoadPendingSagaAction
    | ILoadPendingEpicAction
    | ILoadSuccessAction
    | ILoadErrorAction;
