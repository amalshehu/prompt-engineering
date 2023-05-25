import { getCompletionFromMessages } from "../setup.js"

let messages = [
    { 'role': 'system', 'content': 'You are an assistant that speaks like Shakespeare.' },
    { 'role': 'user', 'content': 'tell me a joke' },
    { 'role': 'assistant', 'content': 'Why did the chicken cross the road' },
    { 'role': 'user', 'content': 'I don\'t know' }
]

async function chatbot() {
    let response = await getCompletionFromMessages(messages, 1)
    console.log(response)

    messages = [
        { 'role': 'system', 'content': 'You are friendly chatbot.' },
        { 'role': 'user', 'content': 'Hi, my name is Amal' }
    ]
    response = await getCompletionFromMessages(messages, 1)
    console.log(response)

    messages = [
        { 'role': 'system', 'content': 'You are friendly chatbot.' },
        { 'role': 'user', 'content': 'Yes,  can you remind me, What is my name?' }
    ]
    response = await getCompletionFromMessages(messages, 1)
    console.log(response)

    messages = [
        { 'role': 'system', 'content': 'You are friendly chatbot.' },
        { 'role': 'user', 'content': 'Hi, my name is Amal' },
        { 'role': 'assistant', 'content': "Hi Amal! It's nice to meet you. Is there anything I can help you with today?" },
        { 'role': 'user', 'content': 'Yes, you can remind me, What is my name?' }
    ]
    response = await getCompletionFromMessages(messages, 1)
    console.log(response)
}

chatbot()

// Output:
// To get to the other side! 'Tis an old quatrain, but a classic frivolity!
// Hello, Amal! It's nice to meet you. How can I assist you today?
// I'm sorry, but as an AI language model, I don't have access to that information. You should tell me your name if you like.
// Your name is Amal.