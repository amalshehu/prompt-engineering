import { getCompletion } from "../setup.js"

const productReview = `
    Got this panda plush toy for my daughter's birthday,
    who loves it and takes it everywhere. It's soft and 
    super cute, and its face has a friendly look. It's 
    a bit small for what I paid though. I think there 
    might be other options that are bigger for the 
    same price. It arrived a day earlier than expected, 
    so I got to play with it myself before I gave it 
    to her.
`

const prompt = `
    Your task is to generate a short summary of a product
    review from an ecommerce site. 

    Summarize the review below, delimited by triple 
    backticks, in at most 30 words. 

    Review: \`\`\`${productReview}\`\`\`
`

const response = await getCompletion(prompt)
console.log(response)

// Output:
// Soft and cute panda plush toy loved by daughter, but a bit small for the price.
// Arrived early.

// Issue #1: Summarize with a focus on shipping and delivery

const prompt2 = `
    Your task is to generate a short summary of a product
    review from an ecommerce site to give feedback to the
    Shipping deparmtment. 

    Summarize the review below, delimited by triple 
    backticks, in at most 30 words, and focusing on any aspects
    that mention shipping and delivery of the product. 

    Review: \`\`\`${productReview}\`\`\`
`

const response2 = await getCompletion(prompt2)
console.log(response2)

// Output:
// The panda plush toy arrived a day earlier than expected, but the customer felt
// it was a bit small for the price paid.

// Issue #2: Try "extract" instead of "summarize"

const prompt3 = `
    Your task is to extract relevant information from  
    a product review from an ecommerce site to give 
    feedback to the Shipping department. 

    From the review below, delimited by triple quotes 
    extract the information relevant to shipping and  
    delivery. Limit to 30 words. 

    Review: \`\`\`${productReview}\`\`\`
`

// const response3 = await getCompletion(prompt3)
// console.log(response3)

// Output:
// "The product arrived a day earlier than expected."
//  - Relevant information for shipping and delivery.


// Issue #3: Summarize multiple product reviews

const productReview2 = `
    Needed a nice lamp for my bedroom, and this one 
    had additional storage and not too high of a price 
    point. Got it fast - arrived in 2 days. The string 
    to the lamp broke during the transit and the company 
    happily sent over a new one. Came within a few days 
    as well. It was easy to put together. Then I had a 
    missing part, so I contacted their support and they 
    very quickly got me the missing piece! Seems to me 
    to be a great company that cares about their customers 
    and products. 
`

const reviews = [productReview, productReview2]

for (let i = 0; i < reviews.length; i++) {
    let prompt = `
    Your task is to generate a short summary of a product 
    review from an ecommerce site.

    Summarize the review below, delimited by triple
    backticks in at most 20 words.

    Review: \`\`\`${reviews[i]}\`\`\`
    `

    const response4 = await getCompletion(prompt)
    console.log(i, response4, "\n")
}

// Output:
// 0 Soft and cute panda plush toy loved by daughter, but small for price. Arrived early. 
// 1 Affordable lamp with storage, fast shipping, and excellent customer service. Easy to assemble.