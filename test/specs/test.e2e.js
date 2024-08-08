const { default: HomeScreen } = require("../pageObjects/home.screen")
const { default: OnboardingScreen } = require("../pageObjects/onboarding.screen")

describe('Wikipedia', () =>{
    it('Validar pesquisa no aplicativo', async () => {
        const onboarding = new OnboardingScreen
        const homescreen = new HomeScreen
        await onboarding.clickBtnSkip()
        await homescreen.clickBtnSearch()
        await homescreen.setValueInpSearch()
        expect(await homescreen.getSearchResult()).toBe('Sport Club Corinthians Paulista')
    })
})