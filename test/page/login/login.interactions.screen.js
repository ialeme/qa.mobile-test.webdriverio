import LoginElementsScreen from "./login.elements.screen.js"

export default class LoginInteractionsScreen extends LoginElementsScreen {
    async clickBtnEntrarLogin(){
        await this.btnEntrarLogin.click()
    }

    async username(){
        await super.txtUsername.click()
        // await this.inpUsername.setValue(userName)
        // await this.setValueTxtName.setValue(userName)
    }

    async setUsername(userName){
        await super.inpUsername.setValue(userName)
    }

    async password(){
        await super.txtPassword.click()
        // await this.inpPassword.setValue(passWord)
    }

    async setPassword(passWord){
        await super.inpPassword.setValue(passWord)
    }
    
    async clickBtnEntrar(){
        await super.btnEntrar.click()
    }

    async getResponseTxt(){        
        return await super.responseTxt.getText()
    }
}