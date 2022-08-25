import { createContext, useReducer } from "react";

export const JourneyContext = createContext()

export const contextReducer = (state, action) => {

    switch (action.type) {
        case 'SET_ENTRIES':
            return {entries: action.payload}
        case 'CREATE_ENTRY':
            return {entries: [...state.entries, action.payload]}
        default:
            throw new Error('Action type not supported!')
    }

}

export const JourneyContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(contextReducer, {
        entries: []
    })

    return(
        <JourneyContext.Provider value={{state, dispatch}}>
            {children}
        </JourneyContext.Provider>
    )

} 