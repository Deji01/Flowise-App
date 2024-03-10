"use client";
import { FullPageChat } from "flowise-embed-react";
import { BubbleChat } from 'flowise-embed-react'

export default function Home() {
  const CHATFLOW_ID = process.env.CHATFLOW_ID!
  const API_HOST = process.env.API_HOST!
  return (
    <>
      <FullPageChat
        chatflowid={CHATFLOW_ID}
        apiHost={API_HOST}
      />

      <BubbleChat
        chatflowid={CHATFLOW_ID}
        apiHost={API_HOST}
      />
    </>
  );
}
