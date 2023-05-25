import { getCompletion } from "../setup.js"

// Model limitations
// Hallucinations - the model will sometimes hallucinate and generate text that is not coherent or consistent with the prompt.

const prompt = `
    Tell me about AeroGlide UltraSlim Smart Toothbrush by Boie
`

const response = await getCompletion(prompt)
console.log(response)

// Output:
// The AeroGlide UltraSlim Smart Toothbrush by Boie is a high-tech toothbrush that uses advanced sonic technology to provide a deep and thorough clean. It features a slim and sleek design that makes it easy to hold and maneuver, and it comes with a range of smart features that help you optimize your brushing routine.
// One of the key features of the AeroGlide UltraSlim Smart Toothbrush is its advanced sonic technology, which uses high-frequency vibrations to break up plaque and bacteria on your teeth and gums. This technology is highly effective at removing even the toughest stains and buildup, leaving your teeth feeling clean and fresh.
// In addition to its sonic technology, the AeroGlide UltraSlim Smart Toothbrush also comes with a range of smart features that help you optimize your brushing routine. These include a built-in timer that ensures you brush for the recommended two minutes, as well as a pressure sensor that alerts you if you're brushing too hard.
// Overall, the AeroGlide UltraSlim Smart Toothbrush by Boie is a highly advanced and effective toothbrush that is perfect for anyone looking to take their oral hygiene to the next level.


// How to fix it

// 1. First find relevent information
// 2. Then answer the question based on the relevant information