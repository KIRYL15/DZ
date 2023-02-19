import React from 'react'
import {Message} from './message/Message'
import MessageSender from './message-sender/MessageSender'
import s2 from '../../s1-main/App.module.css'
import FriendMessage from './friend-message/FriendMessage'

import avatar from './avatar.png'
import avatar1 from './avatar1.png'

/*
*  + 1 - описать тип MessageType
*  + 2 - описать тип MessagePropsType в файле Message.tsx //message: MessageType
*  + 3 - в файле Message.tsx отобразить приходящие данные
*  + 4 - выполнить пункты 2, 3 в файле FriendMessage.tsx
* 5 - сделать стили в соответствии с дизайном
* */

export type MessageType = {
    id: number,
    user: {
        avatar: string, //строка потому что путь к картинке avatar -это стринг
        name: string
    }
    message: {
        text: string,
        time: string
    }
}
// структуру объекта не менять
export const message0: MessageType = {
    id: 5,
    user: {
        avatar: avatar,
        name: 'Lui',
    },
    message: {
        text: 'Hello, how are you, what did you do yesterday?', // можно менять
        time: '22:00', // можно менять
    },
}
export const friendMessage0: MessageType = {
    id: 100,
    user: {
        avatar: avatar1, // можно менять
        name: 'Endi', // можно менять
    },
    message: {
        text: 'Hello, she didn’t do anything and rested all day, how are you?', // можно менять
        time: '22:05', // можно менять
    },
}

export const HW1 = () => {
    return (
        <div id={'hw1'}>
            <div className={s2.hwTitle}>Homework #1</div>
            <div className={s2.hw}>
                {/*проверка отображения (не менять)*/}
                <div>
                    <Message message={message0}/>
                    <FriendMessage message={friendMessage0}/>
                </div>

                {/*для автоматической проверки дз (не менять)*/}
                <MessageSender M={Message}/>
            </div>
        </div>
    )
}