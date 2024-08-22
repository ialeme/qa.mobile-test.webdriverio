import MoreElementsScreen from "./more.elements.screen.js";

export default class MoreIneractionsScreen extends MoreElementsScreen{
    async clickBtnLogin() {
        await this.btnLogin.click()
    }
}