import React from 'react'
import { auth } from '../Firebase'
import { signOut } from "firebase/auth";

const  style={
    button:`bg-gray-200 px-4 py-2 hover:bg-gray-100`
}

const Logout = () => {

    const handleSignout=()=>{
        signOut(auth)
    }
  return (
    <button onClick={handleSignout} className={style.button}>Logout

    </button>
  )
}

export default Logout