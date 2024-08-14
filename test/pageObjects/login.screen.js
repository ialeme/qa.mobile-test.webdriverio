export default class LoginScreen {
    get btnEntrarLogin() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/create_account_login_button")')}
    get inpUsername() { return $('android=new UiSelector().className("android.widget.EditText").instance(0)')}
    get txtUsername() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_username_text")')}
    get inpPassword() { return $('android=new UiSelector().className("android.widget.EditText").instance(1)')}
    get txtPassword() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_password_input")')}
    get btnEntrar() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_button")')}
    get responseTxt() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/snackbar_text")')}

    async clickBtnEntrarLogin(){
        await this.btnEntrarLogin.click()
    }

    async username(){
        await this.txtUsername.click()
        // await this.inpUsername.setValue(userName)
        // await this.setValueTxtName.setValue(userName)
    }

    async setUsername(userName){
        await this.inpUsername.setValue(userName)
    }

    async password(){
        await this.txtPassword.click()
        // await this.inpPassword.setValue(passWord)
    }

    async setPassword(passWord){
        await this.inpPassword.setValue(passWord)
    }
    
    async clickBtnEntrar(){
        await this.btnEntrar.click()
    }

    async getResponseTxt(){        
        return await this.responseTxt.getText()
    }

}