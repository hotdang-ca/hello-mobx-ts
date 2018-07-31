import { observable, action } from 'mobx';

export class AppState {
    @observable
    secretMessage: string = '';

    @action.bound
    setNewSecretMessage(newMessage: string): void {
        this.secretMessage = newMessage;
    }
}