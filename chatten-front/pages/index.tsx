import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import { useState, useEffect } from 'react'
import io, { Socket } from "socket.io-client";
import Messages from '@/components/Messages'
import MessageInput from '@/components/MessageInput'
import NickName from '@/components/NickName'
const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const [socket, setSocket] = useState<Socket>()
  const [messages, setMessages] = useState<string[]>([])
  const [nickName, setNickName] = useState<string>("")
  const send = (value: string, nickName: string) => {
    socket?.emit("message", { nickName, value })
  }
  const sendNewCatter = (nickName: string) => {
    socket?.emit("newChatter", { nickName })
  }
  const messageListener = (message: string) => {
    setMessages([...messages, message])
  }
  const newChatterListener = (newChatter: string) => {
    console.log("new chatter arrived")
    setMessages([...messages, newChatter])
  }

  useEffect(() => {
    const socket = io("wss://chat-nest-socket-backend.vercel.app");
    setSocket(socket)
  }, [setSocket])

useEffect(()=>{
 socket?.on("newChatter", newChatterListener)
    return () => { socket?.off("newChatter", newChatterListener) }
},[newChatterListener])
  
  useEffect(() => {
    socket?.on("message", messageListener)
    return () => { socket?.off("message", messageListener) }
  }, [messageListener])
  return (
    <>
      <Head>
        <title>Chat Board</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="relative flex h-screen w-screen flex-col bg-black md:items-center
                        md:justify-center md:bg-transparent">
          <div className="relative mt-20 rounded bg-black/75 py-10 px-6 md:mt-0 md:max-w-md md:px-14">
            { nickName.length > 0 &&
              <>
                <Messages messages={messages} />
                <MessageInput send={send} nickName={nickName} />
              </>
            }
            { !nickName.length && <NickName sendNewCatter={sendNewCatter} setNickName={setNickName} /> }
          </div>
        </div>
      </main>
    </>
  )
}
