import { getCompletion } from "../setup.js"

const sentiment = "negative"
const review = `
    So, they still had the 17 piece system on seasonal sale for around $49 in the month of November,
    about half off, but for some reason (call it price gouging) around the second week of December
    the prices all went up to about anywhere from between $70-$89 for the same system.
    And the 11 piece system went up around $10 or so in price also from the earlier sale price of $29.
    So it looks okay, but if you look at the base, the part where the blade locks into place
    doesn’t look as good as in previous editions from a few years ago, but I plan to be very
    gentle with it (example, I crush very hard items like beans, ice, rice, etc. in the blender
    first then pulverize them in the serving size I want in the blender then switch
    to the whipping blade for a finer flour, and use the cross cutting blade 
    first when making smoothies, then use the flat blade if I need them finer/less pulpy).
    Special tip when making smoothies, finely cut and freeze the fruits and vegetables
    (if using spinach-lightly stew soften the spinach then freeze until ready for use-and
    if making sorbet, use a small to medium sized food processor) that you plan
    to use that way you can avoid adding so much ice if at all-when making your smoothie.
    After about a year, the motor was making a funny noise.
    I called customer service but the warranty expired already,
    so I had to buy another one. FYI: The overall quality has gone done in these types
    of products, so they are kind of counting on brand recognition and consumer
    loyalty to maintain sales. Got it in about two days.
`

async function analyzeSentimentDetail(sentiment, review) {
    let sentimentDetail = {}

    if (sentiment === "negative") {
        // Identify the main issues the customer is upset about
        sentimentDetail = {
            'pricing': review.includes('price') || review.includes('expensive') || review.includes('cost'),
            'quality': review.includes('quality') || review.includes('broken') || review.includes('damage'),
            'customerService': review.includes('customer service') || review.includes('warranty'),
        }
    }

    return sentimentDetail
}

async function autoReply() {
    const sentimentDetail = await analyzeSentimentDetail(sentiment, review)

    let responseDetail = ''

    if (sentiment === "negative") {
        if (sentimentDetail.pricing) {
            responseDetail += 'We are sorry to hear about your disappointment with our pricing. We are constantly trying to provide the best value for our products.'
        }

        if (sentimentDetail.quality) {
            responseDetail += 'We regret that the quality of our product did not meet your expectations. We will make sure to improve our product quality.'
        }

        if (sentimentDetail.customerService) {
            responseDetail += 'We apologize for your unsatisfactory experience with our customer service. We are striving to improve our service.'
        }
    }

    const prompt = `
        You are a customer service AI assistant. Your task is to send an email reply to a valued customer.
        Given the customer email delimited by \'\', Generate a reply to thank the customer for their review.
        If the sentiment is positive or neutral, thank them for their review. If the sentiment is negative,
        apologize and suggest that they can reach out to customer service.
        Make sure to use specific details from the review. Write in a concise and professional tone.
        Sign the email as \`AI customer agent\`. 
        Customer review: '${review}' 
        Review sentiment: ${sentiment}. 
        Specific reply detail: '${responseDetail}'
    `
    // Temperature is a measure of randomness. The higher the temperature, the more random the output.
    // It you to vary the kind of degree of exploration and variety in the kind of model's responses.
    // Here change the temperature to 0.5 to make the output more deterministic.

    const response = await getCompletion(prompt, 0.5)
    console.log(response)
}

autoReply()

// Output #1 (Temperature = 0):
// Dear valued customer,

// Thank you for taking the time to share your review with us. 
// We appreciate your feedback and are sorry to hear about your disappointment with our pricing.
// We are constantly trying to provide the best value for our products,
// and we regret that we fell short in this instance.

// We also apologize that the quality of our product did not meet your expectations.
// We will make sure to improve our product quality to ensure that our customers receive
// the best possible experience.

// Furthermore, we are sorry for your unsatisfactory experience with our customer service. 
// We are striving to improve our service and ensure that our customers receive the support they need.

// Thank you again for your review and for choosing our product. 
// If you have any further concerns, please do not hesitate to reach out to our customer service team.

// Best regards,

// AI customer agent



// Output #2 (Temperature = 0.5):
// Dear valued customer,

// Thank you for taking the time to leave a review of our product.
// We appreciate your feedback and would like to express our apologies for the inconvenience
// caused by our pricing and product quality.

// We are sorry to hear about your disappointment with our pricing.
// We are constantly trying to provide the best value for our products.
// We regret that the quality of our product did not meet your expectations.
// We will make sure to improve our product quality.

// We apologize for your unsatisfactory experience with our customer service. 
// We are striving to improve our service. If you have any further concerns,
// please do not hesitate to reach out to us.

// Thank you again for your feedback. We hope to have the opportunity to serve you better in the future.

// Best regards,

// AI customer agent
