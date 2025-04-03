import React from "react";
import Navbar from "./Components/Navbar";
import { auth } from "./Firebase";
import {useAuthState} from 'react-firebase-hooks/auth'
import Chat from "./Components/Chat";

const style = {
  appContainer: `max-w-[728px] mx-auto text-center`,
  section: `flex flex-col h-[90vh] bg-gray-100 mt-10 shadow-xl border relative  overflow-hidden`,
};

const App = () => {

  const [user] =useAuthState(auth)
  return (
    <div className={style.appContainer}>
      <section  className={style.section}>
        <Navbar/>
        {user ?<Chat/>:null}
      </section>
    </div>
  );
};

export default App;
