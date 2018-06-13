import { ScoreActionKeys } from '../../types/ScoreActions';

export const loadWithObservable = () => ({
    type: ScoreActionKeys.LOAD_PENDING_WITH_EPIC,
})

export const startPolling = () => ({
    type: ScoreActionKeys.START_POLLING_WITH_EPIC,
})

export const stopPolling = () => ({
    type: ScoreActionKeys.STOP_POLLING,
})

