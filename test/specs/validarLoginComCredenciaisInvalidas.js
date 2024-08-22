import HomeInteractionsScreen from "../page/home/home.interactions.screen.js"
import LoginActionsScreen from "../page/login/login.actions.screen.js"
import LoginInteractionsScreen from "../page/login/login.interactions.screen.js"
import LoginQuestionsScreen from "../page/login/login.questions.screen.js"
import MoreIneractionsScreen from "../page/more/more.interactions.screen.js"
import OnboardingInteractionsScreen from "../page/onboarding/onboarding.interactions.screen.js"

describe('Wikipedia', () =>{
    it('Validar Login com credenciais invalidas', async () => {
        const onboarding = new OnboardingInteractionsScreen()
        const homescreen = new HomeInteractionsScreen()
        const more = new MoreIneractionsScreen()
        const login = new LoginInteractionsScreen()
        const loginEnter = new LoginActionsScreen()
        const loginQuestion = new LoginQuestionsScreen()
        await onboarding.clickBtnSkip()
        await homescreen.clickBtnMore()
        await more.clickBtnLogin()
        await login.clickBtnEntrarLogin()
        await loginEnter.setLogin()
        // await login.username()
        // await login.setUsername("teste")
        // // await login.password()
        // await login.setPassword("teste")
        await login.clickBtnEntrar()
        await loginQuestion.oLoginEInvalido('O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor.')
        // await login.getResponseTxt()
        // expect(await login.getResponseTxt()).toBe('O nome de utilizador ou a palavra-passe inseridos estão incorretos.\nTente novamente, por favor.')
    })
})