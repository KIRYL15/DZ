import React from 'react'
import s from './Message.module.css'
import {MessageType} from "../HW1";

export type MessagePropsType = {
    message: MessageType
}
export const Message = (props: MessagePropsType) => {
    return (
        <div className={s.message}
             id={'hw1-message-' + props.message.id}>
            <div className={s.imageAndText}>
                <img
                    id={'hw1-avatar-' + props.message.id}
                    src={props.message.user.avatar}
                    alt={'avatar_user'}/>
                <div className={s.text}>
                    <div className={s.name}
                         id={'hw1-name-' + props.message.id}>{props.message.user.name}
                    </div>
                    <pre className={s.messageText}
                         id={'hw1-text-' + props.message.id}>
                        {props.message.message.text}
                    </pre>
                </div>
            </div>
            <div className={s.time}
                 id={'hw1-time-' + props.message.id}>{props.message.message.time}
            </div>
        </div>
    )
}

// <div id={'hw1-message-' + props.message.id}
//      className={s.message}>
//
//     {/*IMAGE*/}
//     <div className={s.imageAndText}>
//         <img className={s.img}
//              id={'hw1-avatar-' + props.message.id}
//              src={props.message.user.avatar}/>
//
//         {/*TEXT*/}
//         <div className={s.text}>
//             <div id={'hw1-name-' + props.message.id} className={s.name}>
//                 <p>{props.message.user.name}</p>
//             </div>
//
//             <pre id={'hw1-text-' + props.message.id} className={s.messageText}>
//                         {/*создаёт студент*/}
//                 {props.message.message.text}
//                 {/**/}
//                     </pre>
//
//             <div id={'hw1-time-' + props.message.id} className={s.time}>
//                 {props.message.message.time}
//             </div>
//
//         </div>
//     </div>
// </div>