import HomeActionsScreens from "./home.actions.screen";
import HomeInteractionsScreen from "./home.interactions.screen";

export default class HomeQuestionsScreen extends HomeInteractionsScreen {

    async oTextoPesquisadoEIgualAh(textoDesejado){
        expect(await super.getSearchResult()).toBe(textoDesejado)
    }
    // expect(await homescreen.getSearchResult()).toBe('Sport Club Corinthians Paulista')
}