import { getCompletion } from "../setup.js"

// Principle 1: Write clear and specific instructions
// Tactic 2: Ask for a structured output

const prompt2 = `
  Generate a list of three made-up book titles along \ 
  with their authors and genres. 
  Provide them in JSON format with the following keys: 
  book_id, title, author, genre.
`

const response2 = await getCompletion(prompt2)
console.log(response2)

// Output:
// [
//     {
//       "book_id": 1,
//       "title": "The Lost City of Zorath",
//       "author": "Aria Blackwood",
//       "genre": "Fantasy"
//     },
//     {
//       "book_id": 2,
//       "title": "The Last Survivors",
//       "author": "Ethan Stone",
//       "genre": "Science Fiction"
//     },
//     {
//       "book_id": 3,
//       "title": "The Secret Life of Bees",
//       "author": "Lila Rose",
//       "genre": "Romance"
//     }
//   ]