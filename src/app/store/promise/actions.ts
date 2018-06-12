import { loadScores } from '../../service/score-service';

export const loadWithPromise = () => ({
    payload: loadScores(),
    type: 'LOAD',
})

