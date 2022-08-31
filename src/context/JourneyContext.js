import { createContext, useReducer } from "react";

export const JourneyContext = createContext()

export const contextReducer = (state, action) => {

    switch (action.type) {
        case 'SET_ENTRIES':
            return {...state, entries: action.payload}
        case 'CREATE_ENTRY':
            return {...state, entries: [...state.entries, action.payload]}
        case 'DEL_ENTRY':
            return {...state, entries: state.entries.filter(entry => entry._id !== action.payload)}
        case 'UPDATE_ENTRY':
            return {...state, entries: action.payload}
        case 'SET_CURRENT_ENTRY':
            return {...state, currentEntry: action.payload}
        default:
            throw new Error('Action type not supported!')
    }

}

export const JourneyContextProvider = ({children}) => {

    const [state, dispatch] = useReducer(contextReducer, {
        entries: [],
        currentEntry: null,
    })

    return(
        <JourneyContext.Provider value={{state, dispatch}}>
            {children}
        </JourneyContext.Provider>
    )

} 