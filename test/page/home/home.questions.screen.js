import HomeInteractionsScreen from "./home.interactions.screen.js"

export default class HomeQuestionsScreen extends HomeInteractionsScreen {

    async oTextoPesquisadoEIgualAh(textoDesejado){
        expect(await super.getSearchResult()).toBe(textoDesejado)
    }
    // expect(await homescreen.getSearchResult()).toBe('Sport Club Corinthians Paulista')
}