
import { getCompletion } from "../setup.js"

const lampReview = `
    Needed a nice lamp for my bedroom, and this one had
    additional storage and not too high of a price point.
    Got it fast.  The string to our lamp broke during the
    transit and the company happily sent over a new one.
    Came within a few days as well. It was easy to put
    together.  I had a missing part, so I contacted their
    support and they very quickly got me the missing piece!
    Lumina seems to me to be a great company that cares
    about their customers and products!!
`

const prompt = `
    Identify the following items from the review text: 
    - Item purchased by reviewer
    - Company that made the item

    The review is delimited with triple backticks. \
    Format your response as a JSON object with \
    "Item" and "Brand" as the keys. 
    If the information isn't present, use "unknown" \
    as the value.
    Make your response as short as possible.

    Review text: \`\`\`${lampReview}\`\`\`
`

const response = await getCompletion(prompt)
console.log(response)

// Output:
// {
//     "Item": "lamp with additional storage",
//     "Brand": "Lumina"
// }