import HomeInteractionsScreen from "./home.interactions.screen";

export default class HomeActionsScreens extends HomeInteractionsScreen {
    async search(){
        await super.clickBtnSearch()
        await super.setValueInpSearch("Sport Club Corinthians Paulista")
    }
}