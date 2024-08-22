import LoginInteractionsScreen from "./login.interactions.screen.js";

export default class LoginActionsScreen extends LoginInteractionsScreen {
    async setLogin(){
       await super.username()
       await super.setUsername()
       await super.password()
       await super.setPassword()
    }
}