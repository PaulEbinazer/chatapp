import React, { useState } from "react";
import { auth, db } from "../Firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";

const style = {
  form: ` h-14 w-full max-w-[728px] flex text-xl absolute bottom-0  left-0`,
  input: `w-full text-xl p-3 bg-gray-900 text-white outline-none border-none`,
  button: `w-[20%] bg-green-500`,
};

const Sendmessage = ({scroll}) => {
  const [input, setInput] = useState("");
  const Sendmessage = async (e) => {
    e.preventDefault();
    if (input === "") {
      alert("please enter a valid message");
      return;
    }
    const { uid, displayName } = auth.currentUser;
    await addDoc(collection(db, "messages"), {
      text: input,
      name: displayName,
      uid,
      timestamp: serverTimestamp(),
    });
    setInput("");
    scroll.current.scrollIntoView({ behaviour: 'smooth' });
  };
  return (
    <form onSubmit={Sendmessage} className={style.form}>
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className={style.input}
        type="text"
        placeholder="message"
      />
      <button type="submit" className={style.button}>
        Send Message
      </button>
    </form>
  );
};

export default Sendmessage;
