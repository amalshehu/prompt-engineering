import { getCompletion } from "../setup.js"

const user_messages = [
    "La performance du système est plus lente que d'habitude.",
    "Mi monitor tiene píxeles que no se iluminan.",
    "Il mio mouse non funziona",
    "Mój klawisz Ctrl jest zepsuty",
    "我的屏幕在闪烁"
]

async function universalTranslator() {
    for (let i = 0; i < user_messages.length; i++) {
        const issue = user_messages[i]

        // Identify language
        let prompt = `Tell me what language this is: '${issue}'`
        let lang = await getCompletion(prompt)
        console.log(`Original message (${lang}): ${issue}`)

        // Translate to English and Korean
        prompt = `Translate the following text to English and Korean: '${issue}'`
        let response = await getCompletion(prompt)
        console.log(response, "\n")
    }
}

universalTranslator()

// Output:
// Original message (This is French.): La performance du système est plus lente que d'habitude.
// English: 'The system performance is slower than usual.'
// Korean: '시스템 성능이 평소보다 느립니다.' 

// Original message (This is Spanish.): Mi monitor tiene píxeles que no se iluminan.
// My monitor has pixels that do not light up.

// 제 모니터에는 불이 켜지지 않는 픽셀이 있습니다. 

// Original message (Italian.): Il mio mouse non funziona
// English: 'My mouse is not working'
// Korean: '내 마우스가 작동하지 않습니다' 

// Original message (This is Polish.): Mój klawisz Ctrl jest zepsuty
// English: 'My Ctrl key is broken'
// Korean: '제 Ctrl 키가 고장 났어요' 

// Original message (This is Chinese (Simplified).): 我的屏幕在闪烁
// English: My screen is flickering.
// Korean: 내 화면이 깜빡입니다. 
