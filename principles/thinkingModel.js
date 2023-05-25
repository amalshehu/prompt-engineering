import { getCompletion } from "../setup.js"

// Principle 2: Principle 2: Give the model time to think
// Tactic 1: Specify the steps required to complete a task

const text = `
    In a charming village, siblings Jack and Jill set out on
    a quest to fetch water from a hilltop
    well. As they climbed, singing joyfully, misfortune
    struck—Jack tripped on a stone and tumbled
    down the hill, with Jill following suit.
    Though slightly battered, the pair returned home to
    comforting embraces. Despite the mishap,
    their adventurous spirits remained undimmed, and they
    continued exploring with delight.
`

const prompt = `
    Perform the following actions: 
    1 - Summarize the following text delimited by triple
    backticks with 1 sentence.
    2 - Translate the summary into French.
    3 - List each name in the French summary.
    4 - Output a json object that contains the following
    keys: french_summary, num_names.

    Separate your answers with line breaks.

    Text:
    \`\`\`${text}\`\`\`
`
const response = await getCompletion(prompt)
console.log(response)

// Output:
// Two siblings, Jack and Jill, go on a quest to fetch water from a hilltop well, but misfortune strikes when Jack trips and tumbles down the hill, yet they return home slightly battered but with their adventurous spirits undimmed. 

// Deux frères et sœurs, Jack et Jill, partent en quête d'eau d'un puits au sommet d'une colline, mais un malheur survient lorsque Jack trébuche et dévale la colline, mais ils rentrent chez eux légèrement meurtris mais avec leur esprit d'aventure intact. 

// Jack, Jill. 

// {
//     "french_summary": "Deux frères et sœurs, Jack et Jill, partent en quête d'eau d'un puits au sommet d'une colline, mais un malheur survient lorsque Jack trébuche et dévale la colline, mais ils rentrent chez eux légèrement meurtris mais avec leur esprit d'aventure intact.",
//     "num_names": 2
// }
