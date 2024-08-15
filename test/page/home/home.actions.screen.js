import HomeInteractionsScreen from "./home.interactions.screen";

export default class HomeActionsScreens extends HomeInteractionsScreen {
    async search(){
        super.setValueInpSearch()
        super.setValueInpSearch("Sport Club Corinthians Paulista")
    }
}