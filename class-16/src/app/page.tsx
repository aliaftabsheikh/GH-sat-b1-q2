"use client"

import ChildOne from "@/components/ChildOne";
import Image from "next/image";
import { createContext } from "react";

const Data = createContext({firstName: ""})

export default function Home() {
  return (
    <Data.Provider value={{firstName: "Ali Aftab"}}>
        <ChildOne/>
    </Data.Provider>
  );
}

export{
  Data
}
