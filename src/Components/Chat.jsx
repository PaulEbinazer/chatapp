import React from "react";
import { useState, useEffect, useRef } from "react";
import Message from "./Message";
import { collection, orderBy, query, onSnapshot } from "firebase/firestore";
import { db } from "../Firebase";
import Sendmessage from "./Sendmessage";

const style = {
  main: `flex flex-col p-4 space-y-4 overflow-y-auto h-[80vh] pb-20`,
};


const Chat = () => {
  const [messages, setmessages] = useState([]);
  const scroll = useRef();

  useEffect(() => {
    const q = query(collection(db, "messages"), orderBy("timestamp"));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
      let messages = [];
      querySnapshot.forEach((doc) => {
        messages.push({ ...doc.data(), id: doc.id });
      });
      setmessages(messages);
    });

    return () => unsubscribe();
  }, []);

  return (
    <>
      <main className={style.main}>
        {messages &&
          messages.map((message) => (
            <Message key={message.id} message={message} />
          ))}
      </main>
      <Sendmessage scroll={scroll} />

      <span ref={scroll}></span>
    </>
  );
};

export default Chat;
