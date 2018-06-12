/* tslint:disable:no-console */
import { Observable } from 'rxjs/Observable';
import { fromPromise } from 'rxjs/observable/fromPromise';
import IScore from '../types/Score';

let requestCount = 0;

const request = (onSuccess: any, onError: any) => {
    requestCount++;

    if (requestCount % 5 === 0) {
        setTimeout(() => onError("Server Error!"), 2000)
    }

    setTimeout(() => onSuccess([{
        scoreTeam1: 2,
        scoreTeam2: 0,
        team1: 'Bayern',
        team2: 'Dortmund',
    }]), 2000)
}

export const loadScores = (): Promise<IScore[]> =>
    new Promise((resolve, reject) => {
        request(resolve, reject)
    })

export const loadScoresWithObservable = (): Observable<IScore[]> =>
    fromPromise(loadScores())
