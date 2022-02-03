import React, { useState } from 'react';

const ContextFile = React.createContext();

export default ContextFile;

export const ContextProvider = ({children})=>{

    const [text, setText] =useState("")

    return (<ContextFile.Provider value = {{ text, setText }}>
        {children}
    </ContextFile.Provider>)
}