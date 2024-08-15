export default class HomoElementsScreen {
    get btnSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_container")')}
    get searchResult() { return $('android=new UiSelector().className("android.view.ViewGroup").instance(1).childSelector(new UiSelector().text("Sport Club Corinthians Paulista"))')}
    get inpSearch() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/search_src_text")')}
    get btnMore() { return $('android=new UiSelector().resourceId("org.wikipedia.alpha:id/nav_tab_more")')}
}