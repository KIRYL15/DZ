import React from 'react'
import s from './FriendMessage.module.css'
import {MessageType} from "../HW1";

type FriendMessageType = {
    message: MessageType
}
// создать тип вместо any и отобразить приходящие данные
const FriendMessage = (props: FriendMessageType) => {
    return (
        <div className={s.friendMessage} id={'hw1-friend-message-' + props.message.id}>
            <div className={s.friendImageAndText}>
                <img id={'hw1-friend-avatar-' + props.message.id}
                     src={props.message.user.avatar}
                     alt={'avatar_friend'}
                />
                <div className={s.friendText}>
                    <div className={s.friendName}
                         id={'hw1-friend-name-' + props.message.id}>
                        {props.message.user.name}</div>
                    <pre className={s.friendMessageText}
                         id={'hw1-friend-text-' + props.message.id}
                    >{props.message.message.text}</pre>
                </div>
            </div>
            <div className={s.friendTime}
                 id={'hw1-friend-time-' + props.message.id}>
                {props.message.message.time}</div>
        </div>
    )
}

export default FriendMessage
