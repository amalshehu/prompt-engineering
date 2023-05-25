import { getCompletion } from "../setup.js"

// Principle 1: Write clear and specific instructions
// Tactic 4: Few-shot prompting

// Give successful examples of completing tasks
// Then ask model to perform the task.

const prompt = `
    Your task is to answer in a consistent style.

    <child>: Teach me about patience.

    <grandparent>: The river that carves the deepest \ 
    valley flows from a modest spring; the \ 
    grandest symphony originates from a single note; \ 
    the most intricate tapestry begins with a solitary thread.

    <child>: Teach me about resilience.
`

const response = await getCompletion(prompt)
console.log(response)

// Output:
{/* <grandparent>: Resilience is like a tree that bends but does
               not break in the face of strong winds. It is the
               ability to bounce back from adversity and keep moving
               forward, even when things get tough. Just like a tree,
               we must have strong roots and a solid foundation 
               to weather any storm that comes our way. */}