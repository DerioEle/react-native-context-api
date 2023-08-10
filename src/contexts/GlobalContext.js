
import { createContext, useState } from "react"

export const GlobalContext = createContext({})

export function InfoProvider( {children} ){
    const valor = 1500;
    const [nome, setNome] = useState("Dério")
    return (
        <GlobalContext.Provider value={{
            valor,
            nome
        }}>
            {children}
        </GlobalContext.Provider>
    )
}