import { getCompletion } from "../setup.js"

// Prompt 1: Translate English to Spanish
async function translateEnglishToSpanish() {
    const prompt = "Translate the following English text to Spanish: 'Hi, I would like to order a blender'"
    const response = await getCompletion(prompt)
    console.log(response)
}

// Prompt 2: Identify language
async function identifyLanguage() {
    const prompt = "Tell me which language this is: 'Combien coûte le lampadaire?'"
    const response = await getCompletion(prompt)
    console.log(response)
}

// Prompt 3: Translate English to French and Spanish
async function translateEnglishToFrenchAndSpanish() {
    const prompt = "Translate the following English text to French and Spanish: 'I want to order a basketball'"
    const response = await getCompletion(prompt)
    console.log(response)
}

// Prompt 4: Translate English to Spanish in both formal and informal forms
async function translateEnglishToSpanishFormalAndInformal() {
    const prompt = "Translate the following English text to Spanish in both the formal and informal forms: 'Would you like to order a pillow?'"
    const response = await getCompletion(prompt)
    console.log(response)
}

await translateEnglishToSpanish()
await identifyLanguage()
await translateEnglishToFrenchAndSpanish()
await translateEnglishToSpanishFormalAndInformal()

// Output:
// Hola, me gustaría ordenar una licuadora.
// This is French.
// French: Je veux commander un ballon de basket-ball
// Spanish: Quiero ordenar un balón de baloncesto
// Formal: ¿Le gustaría ordenar una almohada?
// Informal: ¿Te gustaría ordenar una almohada?