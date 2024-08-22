import HomeActionsScreens from  "../page/home/home.actions.screen"
import HomeQuestionsScreen from "../page/home/home.questions.screen"
import OnboardingScreen from "../page/onboarding.screen"

describe('Wikipedia', () =>{
    it('Validar pesquisa no aplicativo', async () => {
        const onboarding = new OnboardingScreen()
        const homescreen = new HomeActionsScreens()
        const homeQuestion = new HomeQuestionsScreen()
        await onboarding.clickBtnSkip()
        await homescreen.setValueInpSearch()
        await homeQuestion.oTextoPesquisadoEIgualAh('Sport Club Corinthians Paulista')
    })
})