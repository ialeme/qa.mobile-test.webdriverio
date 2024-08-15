export default class LoginElementsScreen {
    get btnEntrarLogin() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/create_account_login_button")')}
    get inpUsername() { return $('android=new UiSelector().className("android.widget.EditText").instance(0)')}
    get txtUsername() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_username_text")')}
    get inpPassword() { return $('android=new UiSelector().className("android.widget.EditText").instance(1)')}
    get txtPassword() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_password_input")')}
    get btnEntrar() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/login_button")')}
    get responseTxt() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/snackbar_text")')}
}