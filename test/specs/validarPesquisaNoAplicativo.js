import HomeActionsScreens from  "../page/home/home.actions.screen.js"
import HomeQuestionsScreen from "../page/home/home.questions.screen.js"
import OnboardingInteractionsScreen from "../page/onboarding/onboarding.interactions.screen.js"


describe('Wikipedia', () =>{
    it('Validar pesquisa no aplicativo', async () => {
        const onboarding = new OnboardingInteractionsScreen()
        const homescreen = new HomeActionsScreens()
        const homeQuestion = new HomeQuestionsScreen()
        await onboarding.clickBtnSkip()
        await homescreen.search()
        await homeQuestion.oTextoPesquisadoEIgualAh('Sport Club Corinthians Paulista')
    })
})