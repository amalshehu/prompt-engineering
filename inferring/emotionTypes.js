
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
Identify a list of emotions that the writer of the
following review is expressing. Include no more than
five items in the list. Format your answer as a list of
lower-case words separated by commas.


Review text: \`\`\`${lampReview}\`\`\`
`

const response = await getCompletion(prompt)
console.log(response)

// Output:
// happy, satisfied, impressed, grateful, content