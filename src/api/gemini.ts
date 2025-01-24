import { Message } from "../App";
const GEMINI_KEY = "AIzaSyBIUqeF7eisOFHE75wLX_Fgkv8S9GpFZnA";

interface IContent {
    role: string
    parts: {
        text: string
    }[]
}

function make_context(messages: Message[]) {
    const context = messages.map((message) => ({
        role: message.sender,
        parts: [ { text: message.text } ]
    }) as IContent);
    return context;
}

export async function get_text_in_gemini(newMessage: Message, messages: Message[]): Promise<Message> {
    const headers = new Headers();
    headers.append("Content-Type", "application/json");

    const body = JSON.stringify({
        contents: make_context([...messages, newMessage])
    })
    const response = await fetch(`https://generativelanguage.googleapis.com/v1beta/models/gemini-1.5-flash-latest:generateContent?key=${GEMINI_KEY}`, {
        method: "POST",
        headers,
        body,
        redirect: "follow"
    })
    const payload: any = await response.json();
    return {
        sender: payload.candidates[0].content.role,
        text: payload.candidates[0].content.parts[0].text,
        timestamp: new Date()
    }
}