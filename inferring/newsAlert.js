
import { getCompletion } from "../setup.js"

const story = `
    In a recent survey conducted by the government, 
    public sector employees were asked to rate their level 
    of satisfaction with the department they work at. 
    The results revealed that NASA was the most popular 
    department with a satisfaction rating of 95%.

    One NASA employee, John Smith, commented on the findings, 
    stating, "I'm not surprised that NASA came out on top. 
    It's a great place to work with amazing people and 
    incredible opportunities. I'm proud to be a part of 
    such an innovative organization."

    The results were also welcomed by NASA's management team, 
    with Director Tom Johnson stating, "We are thrilled to 
    hear that our employees are satisfied with their work at NASA. 
    We have a talented and dedicated team who work tirelessly 
    to achieve our goals, and it's fantastic to see that their 
    hard work is paying off."

    The survey also revealed that the 
    Social Security Administration had the lowest satisfaction 
    rating, with only 45% of employees indicating they were 
    satisfied with their job. The government has pledged to 
    address the concerns raised by employees in the survey and 
    work towards improving job satisfaction across all departments.
`

const prompt = `
    Determine five topics that are being discussed in the \
    following text, which is delimited by triple backticks.

    Make each item one or two words long. 

    Format your response as a list of items separated by commas.
    Text sample: \`\`\`${story}\`\`\`
`

const response = await getCompletion(prompt)
console.log(response)

// Output:
// government survey, job satisfaction, NASA, Social Security Administration, 
// employee comments

const topicList = response.replace(/- /g, '').split('\n')

const prompt2 = `
    Determine whether each item in the following list of \
    topics is a topic in the text below, which
    is delimited with triple backticks.

    Give your answer as list with 0 or 1 for each topic.\

    List of topics: ${topicList.join(', ')}
    Text sample: \`\`\`${story}\`\`\`
`

const response2 = await getCompletion(prompt2)
console.log(response2)

// Output:
// - government survey: 1
// - job satisfaction: 1
// - NASA: 1
// - Social Security Administration: 1
// - employee comments: 1


let responseLines = response2.trim().split('\n')
let topicDict = {}

for (let i = 0; i < responseLines.length; i++) {
    let line = responseLines[i].trim().split(': ')
    topicDict[line[0].replace("-", '').trim()] = parseInt(line[1])
}

Object.keys(topicDict).forEach(key => {
    key.startsWith("NASA") ? console.log('ALERT: New NASA story') : console.log('No NASA story')

})