import { getCompletion } from "../setup.js"

const text = [
    "The girl with the black and white puppies have a ball.",
    "Yolanda has her notebook.",
    "Its going to be a long day. Does the car need it’s oil changed?",
    "Their goes my freedom. There going to bring they’re suitcases.",
    "Your going to need you’re notebook.",
    "That medicine effects my ability to sleep. Have you heard of the butterfly affect?",
    "This phrase is to cherck chatGPT for speling abilitty"
]

async function checkGrammarAndSpelling() {
    for (let i = 0; i < text.length; i++) {
        const t = text[i]
        const prompt = `
            Proofread and correct the following text and rewrite the corrected version.
            If you don't find any errors, just say "No errors found". 
            Don't use any punctuation around the text: '${t}'`
        const response = await getCompletion(prompt)
        console.log(response)
    }
}

async function checkReview() {
    const text = `
        Got this for my daughter for her birthday cuz she keeps taking mine from my room.
        Yes, adults also like pandas too.  She takes it everywhere with her,
        and it's super soft and cute.  One of the ears is a bit lower than the other,
        and I don't think that was designed to be asymmetrical.
        It's a bit small for what I paid for it though. I think there might be other options
        that are bigger for the same price.  It arrived a day earlier than expected,
        so I got to play with it myself before I gave it to my daughter.
    `

    let prompt = "proofread and correct this review: '" + text + "'"
    let response = await getCompletion(prompt)
    console.log(response)

    prompt = `
        Proofread and correct this review. Make it more compelling. 
        Ensure it follows APA style guide and targets an advanced reader.
        Output in markdown format. Text: '${text}'
    `

    response = await getCompletion(prompt)
    console.log(response)
}

checkGrammarAndSpelling()
checkReview()

// Output:
// Rewritten: The girl who has black and white puppies is playing with a ball.
// No errors found.
// It's going to be a long day. Does the car need its oil changed?

// No errors found.
// No errors found.
// Your going to need you’re notebook.

// You're going to need your notebook.
// I got this for my daughter's birthday because she keeps taking mine from my room. Yes, adults also like pandas too. She takes it everywhere with her, and it's super soft and cute. However, one of the ears is a bit lower than the other, and I don't think that was designed to be asymmetrical. Additionally, it's a bit small for what I paid for it. I think there might be other options that are bigger for the same price. On the positive side, it arrived a day earlier than expected, so I got to play with it myself before I gave it to my daughter.
// That medicine affects my ability to sleep. Have you heard of the butterfly effect?

// Rewritten: The medicine is affecting my ability to sleep. Have you ever heard of the butterfly effect? 

// No errors found.
// This phrase is to check ChatGPT for spelling ability.

// No errors found.
// # **Review of a Panda Plush Toy**

// I purchased this panda plush toy for my daughter's birthday as she kept taking mine from my room. As an adult, I also appreciate the cuteness of pandas, and I must say that this toy did not disappoint. 

// My daughter takes it everywhere with her, and it's incredibly soft and adorable. However, I did notice that one of the ears is slightly lower than the other, which I don't think was designed to be asymmetrical. 

// While I am pleased with the quality of the toy, I do feel that it is a bit small for the price I paid. I believe there are other options available that are larger for the same price. 

// Despite this, I was pleasantly surprised when the toy arrived a day earlier than expected, allowing me to play with it myself before giving it to my daughter. Overall, I would recommend this panda plush toy to anyone who loves cute and cuddly toys.