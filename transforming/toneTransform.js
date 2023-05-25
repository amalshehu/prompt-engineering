import { getCompletion } from "../setup.js"

async function transformTone() {
    const prompt = `
        Translate the following from slang to a business letter: 
        'Dude, This is Joe, check out this spec on this standing lamp.'`
    const response = await getCompletion(prompt)
    console.log(response)
}

transformTone()

// Output:
// Dear Sir/Madam,

// I am writing to bring to your attention a standing lamp that I believe may
// be of interest to you. Please find attached the specifications for your review.

// Thank you for your time and consideration.

// Sincerely,

// Joe