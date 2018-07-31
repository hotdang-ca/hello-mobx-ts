import * as React from 'react';
import { observer, inject } from 'mobx-react';
import { AppState } from '../../stores/AppState';

export interface IRightBrainProps {
    appState?: AppState,
    title: string,
}

@inject('appState')
@observer
export class RightBrain extends React.Component<IRightBrainProps,any> {
    public render(): JSX.Element {
        return (
            <div style={{ width: '100%' }}>
                <small>{ this.props.title }</small>
                <h3>Secret Message:</h3>
                { this.props.appState.secretMessage || <em>No message set...</em>}
            </div>
        )
    }
}
