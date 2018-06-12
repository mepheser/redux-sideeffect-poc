import IScore from './Score';

interface IScoreState {
    readonly isLoading: boolean,
    readonly result: IScore[],
    readonly error?: string,
}

export default IScoreState
