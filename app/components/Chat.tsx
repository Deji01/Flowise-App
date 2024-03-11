"use client";
// import { FullPageChat } from "flowise-embed-react";
import { BubbleChat } from 'flowise-embed-react'


const Chat = () => {
    const NEXT_PUBLIC_CHATFLOW_ID = process.env.NEXT_PUBLIC_CHATFLOW_ID;
    const NEXT_PUBLIC_API_HOST = process.env.NEXT_PUBLIC_API_HOST;

    if (!NEXT_PUBLIC_CHATFLOW_ID || !NEXT_PUBLIC_API_HOST) {
        console.error("Chatflow ID or API Host not defined.");
        return <div>Chat feature is currently unavailable.</div>;
    }

        return (
            <BubbleChat
                chatflowid={NEXT_PUBLIC_CHATFLOW_ID!}
                apiHost={NEXT_PUBLIC_API_HOST!}
            />)
    };
export default Chat;