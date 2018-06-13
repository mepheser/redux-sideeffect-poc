import IScore from './Score';

export enum ScoreActionKeys {
    LOAD_PENDING = "LOAD_PENDING",
    LOAD_PENDING_WITH_SAGA = "LOAD_PENDING_WITH_SAGA",
    LOAD_PENDING_WITH_EPIC = "LOAD_PENDING_WITH_EPIC",
    LOAD_SUCCESS = "LOAD_SUCCESS",
    LOAD_ERROR = "LOAD_ERROR",
    START_POLLING_WITH_EPIC = "START_POLLING_WITH_EPIC",
    STOP_POLLING = "STOP_POLLING",
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

export interface IStartPollingWithEpicAction {
    type: ScoreActionKeys.START_POLLING_WITH_EPIC;
}

export interface IStopPolling {
    type: ScoreActionKeys.STOP_POLLING;
    payload: string
}

export type ScoreActionTypes =
    | ILoadPendingAction
    | ILoadPendingSagaAction
    | ILoadPendingEpicAction
    | ILoadSuccessAction
    | ILoadErrorAction
    | IStartPollingWithEpicAction
    | IStopPolling;
