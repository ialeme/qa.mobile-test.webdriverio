export default class MoreScreen {
    get btnLogin() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/main_drawer_account_container")')}

    async clickBtnLogin() {
        await this.btnLogin.click()
    }
}