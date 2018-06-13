import * as React from 'react';
import { connect } from 'react-redux';
import { loadWithObservable, startPolling, stopPolling } from '../store/observable/actions';
import { loadWithPromise } from '../store/promise/actions';
import { loadWithSaga } from '../store/saga/actions';
import { selectScoresAreLoading, selectScoresError, selectScoresResult } from '../store/selectors';
import { loadWithThunk } from '../store/thunk/actions';
import IAppState from '../types/AppState';
import IScore from '../types/Score';

interface IProps {
    error?: string,
    isLoading: boolean,
    loadEpics: () => void,
    loadPromise: () => void,
    loadSaga: () => void,
    loadThunk: () => void,
    startPollingEpic: () => void,
    stopPollingEpic: () => void,
    result: IScore[],
}

class App extends React.Component<IProps> {

    public render() {
        const {error, isLoading} = this.props
        const {loadEpics, loadPromise, loadSaga, loadThunk, startPollingEpic, stopPollingEpic} = this.props

        return (
            <div className="App">
                <div>
                    <button onClick={loadThunk}> Load with thunk</button>
                    <button onClick={loadPromise}> Load with promise</button>
                    <button onClick={loadSaga}> Load with saga</button>
                    <button onClick={loadEpics}> Load with epics</button>
                    <button onClick={startPollingEpic}> Start polling with epics</button>
                    <button onClick={stopPollingEpic}> Stop polling</button>
                </div>
                <div className="App-intro">
                    {(isLoading) && this.renderLoading()}
                    {(!isLoading && error) && this.renderError()}
                    {(!isLoading && !error) && this.renderResult()}
                </div>
            </div>
        );
    }

    private renderLoading() {
        return (
            <p> Loading.. </p>
        )
    }

    private renderError() {
        const {error} = this.props

        return (
            <p>Error: {error}</p>
        )
    }

    private renderResult() {
        const {result} = this.props

        return result.map((score) => (
            <p key={`${score.team1}${score.team2}`}>
                {score.team1} {score.scoreTeam1} : {score.scoreTeam2} {score.team2}
            </p>
        ))
    }
}

const mapStateToProps = (state: IAppState) => ({
    error: selectScoresError(state),
    isLoading: selectScoresAreLoading(state),
    result: selectScoresResult(state),
})

const mapDispatchToProps = (dispatch: any) => ({
    loadEpics: () => dispatch(loadWithObservable()),
    loadPromise: () => dispatch(loadWithPromise()),
    loadSaga: () => dispatch(loadWithSaga()),
    loadThunk: () => dispatch(loadWithThunk()),
    startPollingEpic: () => dispatch(startPolling()),
    stopPollingEpic: () => dispatch(stopPolling()),
})

export default connect(
    mapStateToProps, mapDispatchToProps,
)(App);
