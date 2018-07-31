import * as React from 'react';
import { inject } from 'mobx-react';
import { AppState } from '../../stores/AppState';

export interface ILeftBrainProps {
    appState?: AppState,
    title: string,
}

@inject('appState')
export class LeftBrain extends React.Component<ILeftBrainProps,any> {
    public constructor(props: ILeftBrainProps, state: any) {
        super(props, state);
    }

    private _onMessageChanged(e: any): void {
        this.props.appState.setNewSecretMessage(e.target.value);
    }

    public render(): JSX.Element {
        return (
            <div style={{ width: '100%' }}>
                <small>{ this.props.title }</small>
                <div>
                    <input
                        type="text"
                        onChange={this._onMessageChanged.bind(this)}
                        placeholder="Enter a secret message." />
                </div>
            </div>
        )
    }
}