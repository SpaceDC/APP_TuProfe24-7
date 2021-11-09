import React, { useCallback, useEffect, useLayoutEffect, useState } from 'react'
import { GiftedChat } from 'react-native-gifted-chat'
import { db, auth } from '../database/firebase';

const Chat2 = () => {
    const [messages, setMessages] = useState([]);
    
    const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
    const {
    _id,
    createdAt,
    text,
    user,
    } = messages[0]
    db.collection('chats2').add({
    _id,
    createdAt,
    text,
    user
    })
    }, [])

    useLayoutEffect(() => {
        const unsubscribe = db.collection('chats2').orderBy('createdAt', 'desc').onSnapshot(snapshot => setMessages(
        snapshot.docs.map(doc => ({
        _id: doc.data()._id,
        createdAt: doc.data().createdAt.toDate(),
        text: doc.data().text,
        user: doc.data().user,
        }))
        ));
        return unsubscribe;
        }, [])

  return (
    <GiftedChat
        messages={messages}
        showAvatarForEveryMessage={true}
        onSend={messages => onSend(messages)}
        user={{
        _id: auth?.currentUser?.email,
        name: auth?.currentUser?.displayName,
        avatar: 'https://placeimg.com/140/140/any'
        }}
    />
  )
  
    }

    export default Chat2;