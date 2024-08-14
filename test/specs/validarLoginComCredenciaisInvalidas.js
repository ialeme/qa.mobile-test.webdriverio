import HomeScreen from "../pageObjects/home.screen.js"
import LoginScreen from "../pageObjects/login.screen.js"
import MoreScreen from "../pageObjects/more.screen.js"
import OnboardingScreen from "../pageObjects/onboarding.screen.js"

describe('Wikipedia', () =>{
    it('Validar Login com credenciais invalidas', async () => {
        const onboarding = new OnboardingScreen()
        const homescreen = new HomeScreen()
        const more = new MoreScreen()
        const login = new LoginScreen()
        await onboarding.clickBtnSkip()
        await homescreen.clickBtnMore()
        await more.clickBtnLogin()
        await login.clickBtnEntrarLogin()
        await login.username()
        await login.setUsername("teste")
        await login.password()
        await login.setPassword("teste")
        await login.clickBtnEntrar()
        await login.getResponseTxt()
        exxpect(await login.getResponseTxt()).toBe('O nome de utilizador ou a palavra-passe inseridos estão incorretos. Tente novamente, por favor.')
    })
})