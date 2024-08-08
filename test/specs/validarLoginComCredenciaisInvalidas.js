import HomeScreen from "../pageObjects/home.screen"
import LoginScreen from "../pageObjects/login.screen"
import MoreScreen from "../pageObjects/more.screen"
import OnboardingScreen from "../pageObjects/onboarding.screenn"

describe('Wikipedia', () =>{
    it('Validar Login com credenciais invalidas', async () => {
        const onboarding = new OnboardingScreen
        const homescreen = new HomeScreen
        const more = new MoreScreen
        const login = new LoginScreen
        await onboarding.clickBtnSkip()
        await homescreen.clickBtnMore()
        await more.clickBtnLogin()
        await login.ClickBtnEntrar()
        await login.username(teste)
        await login.password(teste)
        // expect(await homescreen.getSearchResult()).toBe('Sport Club Corinthians Paulista')
    })
})