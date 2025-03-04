"use client"
import { MessageType } from "@/types/message.types"
import Messages from "../messages/Messages"
import { useState } from "react"

enum Tabview {
    MESSAGES, REPLIES
}

type UserTabsProps = {
    messages: MessageType[],
    replies: MessageType[]
}

const UserTabs = ({ messages, replies }: UserTabsProps) => {
    const [tab, setTab] = useState<Tabview>(Tabview.MESSAGES)
    return (
        <>
            <div className="flex justify-evenly mb-4">
                <div className={`cursor-pointer ${tab === Tabview.MESSAGES ? 'border-b-2 border-blue-400' : ''}`}
                    onClick={() => setTab(Tabview.MESSAGES)}
                >
                    Mensajes
                </div>
                <div className={`cursor-pointer ${tab === Tabview.REPLIES ? 'border-b-2 border-blue-400' : ''}`}
                    onClick={() => setTab(Tabview.REPLIES)}
                >Respuestas</div>
            </div>
            <div>
                {tab === Tabview.MESSAGES && messages.map((message, index) => (
                    <Messages key={index} message={message} />
                ))}
                {tab === Tabview.REPLIES && replies.map((message, index) => (
                    <Messages key={index} message={message} />
                ))}
            </div>
        </>
    )
}

export default UserTabs