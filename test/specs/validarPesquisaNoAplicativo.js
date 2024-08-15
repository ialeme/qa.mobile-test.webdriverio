
import HomeScreen from "../page/home/home.screen.js"
import OnboardingScreen from "../page/onboarding.screen.js"

describe('Wikipedia', () =>{
    it('Validar pesquisa no aplicativo', async () => {
        const onboarding = new OnboardingScreen()
        const homescreen = new HomeScreen()
        await onboarding.clickBtnSkip()
        await homescreen.clickBtnSearch()
        await homescreen.setValueInpSearch()
        expect(await homescreen.getSearchResult()).toBe('Sport Club Corinthians Paulista')
    })
})