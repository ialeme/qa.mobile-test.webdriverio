import LoginInteractionsScreen from "./login.interactions.screen.js";

export default class LoginQuestionsScreen extends LoginInteractionsScreen {

    async oLoginEInvalido(){
        expect(await super.getResponseTxt()).toBe('O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor.')
    }
}