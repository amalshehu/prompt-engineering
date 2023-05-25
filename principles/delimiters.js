import { getCompletion } from "../setup.js"

// Principle 1: Write clear and specific instructions
// Principle 2: Principle 2: Give the model time to think

// Tactic 1: Use delimiters to clearly indicate distinct parts of the input
// Delimiters can be anything like: ```, """, < >, <tag> </tag>, :

const text = `
  You should express what you want a model to do by \ 
  providing instructions that are as clear and \ 
  specific as you can possibly make them. \ 
  This will guide the model towards the desired output, \ 
  and reduce the chances of receiving irrelevant \ 
  or incorrect responses. Don't confuse writing a \ 
  clear prompt with writing a short prompt. \ 
  In many cases, longer prompts provide more clarity \ 
  and context for the model, which can lead to \ 
  more detailed and relevant outputs. \
`

const prompt = `
  Summarize the text delimited by triple backticks 
  into a single sentence.
  \`\`\`${text}\`\`\`
`
const response = await getCompletion(prompt)
console.log(response)

// Output:
// To guide a model towards the desired output and reduce the chances of 
// irrelevant or incorrect responses, it is important to provide clear and specific
// instructions, which may require longer prompts for more clarity and context.