import { getCompletion } from "../setup.js"

// Principle 2: Principle 2: Give the model time to think
// Tactic 2: Instruct the model to work out its own solution before rushing to a conclusion

const prompt = `
    Determine if the student's solution is correct or not.

    Question:
    I'm building a solar power installation and I need \
    help working out the financials. 
    - Land costs $100 / square foot
    - I can buy solar panels for $250 / square foot
    - I negotiated a contract for maintenance that will cost \ 
    me a flat $100k per year, and an additional $10 / square \
    foot
    What is the total cost for the first year of operations 
    as a function of the number of square feet.

    Student's Solution:
    Let x be the size of the installation in square feet.
    Costs:
    1. Land cost: 100x
    2. Solar panel cost: 250x
    3. Maintenance cost: 100,000 + 100x
    Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
`

const response = await getCompletion(prompt)
console.log(response)

// Output:
// The student's solution is correct.


// But the student's solution is actually not correct.
// We can fix this by instructing the model to work out its own solution first.

const prompt2 = `
    Your task is to determine if the student's solution
    is correct or not.
    To solve the problem do the following:
    - First, work out your own solution to the problem. 
    - Then compare your solution to the student's solution
    and evaluate if the student's solution is correct or not. 
    Don't decide if the student's solution is correct until 
    you have done the problem yourself.

    Use the following format:
    Question:
    \`\`\`\
    question here
    \`\`\`\
    Student's solution:
    \`\`\`\
    student's solution here
    \`\`\`\
    Actual solution:
    \`\`\`\
    steps to work out the solution and your solution here
    \`\`\`\
    Is the student's solution the same as actual solution
    just calculated:
    \`\`\`\
    yes or no
    \`\`\`\
    Student grade:
    \`\`\`\
    correct or incorrect
    \`\`\`\

    Question:
    \`\`\`\
    I'm building a solar power installation and I need help
    working out the financials. 
    - Land costs $100 / square foot
    - I can buy solar panels for $250 / square foot
    - I negotiated a contract for maintenance that will cost
    me a flat $100k per year, and an additional $10 / square
    foot
    What is the total cost for the first year of operations
    as a function of the number of square feet.
    \`\`\`\ 
    Student's solution:
    \`\`\`\
    Let x be the size of the installation in square feet.
    Costs:
    1. Land cost: 100x
    2. Solar panel cost: 250x
    3. Maintenance cost: 100,000 + 100x
    Total cost: 100x + 250x + 100,000 + 100x = 450x + 100,000
    \`\`\`\
    Actual solution:
`

const response2 = await getCompletion(prompt2)
console.log(response2)

// Output:
// The student's solution is correct.
// To calculate the total cost for the first year of operations as a function of the number of square feet, we need to add up the cost of land, solar panels, and maintenance. 

// Let x be the size of the installation in square feet. 

// 1. Land cost: $100 / square foot * x square feet = $100x
// 2. Solar panel cost: $250 / square foot * x square feet = $250x
// 3. Maintenance cost: $100,000 + $10 / square foot * x square feet = $100,000 + $10x
// Total cost: $100x + $250x + $100,000 + $10x = $360x + $100,000

// Is the student's solution the same as actual solution just calculated:
// Yes

// Student grade:
// Correct