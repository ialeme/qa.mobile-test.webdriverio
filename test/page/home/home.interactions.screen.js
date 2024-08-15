import HomoElementsScreen from "./home.elements.screen";

export default class HomeInteractionsScreen extends HomoElementsScreen {
    async clickBtnSearch() {
        await this.btnSearch.click()
      }
    
      async setValueInpSearch() {
        await super.inpSearch.setValue("Sport Club Corinthians Paulista")
      }
  
      async getSearchResult() {
         return await super.searchResult.getText()
      }
  
      async clickBtnMore() {
          await super.btnMore.click()
      }
}